import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import "../styles/search_result.css";

const SearchResultItem = ({result}) => {
  return (
    <div className="result">
        <img src={require("../image/searchresult/" + result.image_address)} alt=""/>
        <p className="result-name">{result.name}</p>
        <p className="result-description">{result.description}</p>
        <a className="nav-text pic-text a-link-style button-color"
            href={"/progress.html?other=" + result.name + "&as=" + "tourist"}>
            Connect</a>
    </div>
  );
};

SearchResultItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default SearchResultItem;