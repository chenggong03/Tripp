import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as progressActions from '../actions/progressActions';
import '../styles/progress.css';
import Chat from "./common/Chat";

class Progress extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
        <div id="main-frame">
          <div className="schedule-left">
            <div className="schedule-title"><span className="other-name">Shantao</span>'s</div>
            <div className="schedule-line"></div>
            <table className="schedule-table">
                {this.props.todoLeft.map(item => 
                      <tbody key={`left${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className="date-title">{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className="schedule-description">{item.content}</div></td>
                        </tr>
                      </tbody>
                )}
            </table>
            </div>

          <div className="schedule-right">
            <div className="schedule-title">Yours</div>
            <div className="schedule-line"></div>
            <table className="schedule-table">
                {this.props.todoRight.map(item => 
                      <tbody key={`right${item.count}`}>
                        <tr>
                          <td><div className={`circle-${item.color} schedule-dot`}></div></td>
                          <td><div className="date-title">{item.title}</div></td>
                        </tr>
                        <tr>
                          <td></td><td><div
                          className="schedule-description">{item.content}</div></td>
                        </tr>
                      </tbody>
                )}
           </table>
          </div>
          <Chat />          
        </div>
    );
  }
} 

Progress.propTypes = {
  todoLeft: PropTypes.array.isRequired,
  todoRight: PropTypes.array.isRequired, 
  actions: PropTypes.object.isRequired	
};

function mapStateToProps(state, ownProps) {
  //console.log(state); 
  return {
		todoLeft: state.progress.todoLeft, 
		todoRight: state.progress.todoRight 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(progressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
