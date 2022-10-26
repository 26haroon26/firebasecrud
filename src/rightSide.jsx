import "./toggle.css";
import "./rightSide.css";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faThumbsUp,faComment, faShare,faUserGroup} from '@fortawesome/free-solid-svg-icons'

function RightSide() {
  return (
    <div className="RightSide">
     
      <div className="body">
        <ul className="list">
          <li className="listItems">
            <img
              src="./images/img1.png"
              alt=""
              className="listItemsImageround"
            />
            <p className="listItemsText">MuhammadHaroon</p>
          </li>
          <li className="listItems">
            <img src="./images/img2.png" alt="" className="listItemsImage" />
            {/* <FontAwesomeIcon style={{color:"red"}} icon={faThumbsUp} />  */}
            {/* <FontAwesomeIcon icon={faUserGroup} /> */}
            <p className="listItemsText">Friends</p>
          </li>
          <li className="listItems">

            <img src="./images/img3.png" alt="" className="listItemsImage" />
          {/* <FontAwesomeIcon style={{color:"red"}} icon={faComment} />  */}
            <p className="listItemsText">Groups</p>
          </li>
          <li className="listItems">
            <img src="./images/img4.png" alt="" className="listItemsImage" />
            {/* <FontAwesomeIcon className="shareIcon" icon={faShare} /> */}
            <p className="listItemsText">Marketplace</p>
          </li>
          <li className="listItems">
            <img src="./images/img5.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Watch</p>
          </li>
          <li className="listItems">
            <img src="./images/img6.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Saved</p>
          </li>
          <li className="listItems">
            <img src="./images/img7.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Pages</p>
          </li>
          <li className="listItems">
            <img src="./images/img8.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Recentadactivity</p>
          </li>
          <li className="listItems">
            <img src="./images/img9.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Memories</p>
          </li>
          <li className="listItems">
            <img src="./images/img10.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Events</p>
          </li>
          <li className="listItems">
            <img src="./images/img11.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Most recent</p>
          </li><li className="listItems">
            <img src="./images/img11.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Most recent</p>
          </li><li className="listItems">
            <img src="./images/img11.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Most recent</p>
          </li><li className="listItems">
            <img src="./images/img11.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Most recent</p>
          </li>
        </ul>
            <button className="btn">See More</button>
      </div>
    </div>
  );
}

export default RightSide;
