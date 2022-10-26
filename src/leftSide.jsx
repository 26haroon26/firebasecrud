import React from "react";
import "./leftSide.css";
import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMagnifyingGlass,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

function LeftSide() {
  return (
    <div className="LeftSide">
      <div className="head">
        <div className="first">
          <ul>
            <li className="Big">Friend request</li>
            <li>
              <span>See All</span>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <img className="imgBig" src="./images/img1.png" alt="" />
            </li>
            <li className="secondDiv">
              <div className="PName">
                <h5>Haroon</h5> <strong>3w</strong>
              </div>
              <div className="MutDiv">
                <img className="img" src="./images/img1.png" alt="" />
                <p>Mutual Friend</p>
              </div>
              <div className="third">
                <button className="btn blue">Confirm</button>
                <button className="btn grey">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="center">
        <div className="first">
          <div className="Big" style={{ color: "#6D6F73" }}>
            Contact
          </div>
          <ul>
            <li>
              <FontAwesomeIcon style={{ color: "#6D6F73" }} icon={faVideo} />
            </li>
            <li>
              <FontAwesomeIcon
                style={{ color: "#6D6F73" }}
                icon={faMagnifyingGlass}
              />
            </li>
            <li>
              <FontAwesomeIcon style={{ color: "#6D6F73" }} icon={faEllipsis} />
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>
              <img className="img1 " src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
            <li>
              <img className="img1" src="./images/img1.png" alt="" />
              <p>Haroon</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <h3>Group conversation</h3>
        <div>
          <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
            <g transform="translate(-446 -350)">
              <g>
                <path
                  d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                  transform="translate(354.5 159.5)"
                ></path>
                <path
                  d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                  transform="translate(354.5 159.5)"
                ></path>
              </g>
            </g>
          </svg>
          <p>Create New Group</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
