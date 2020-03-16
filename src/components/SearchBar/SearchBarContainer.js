// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faCompass, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
