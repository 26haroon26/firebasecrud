import "./center.css";
import "./toggle.css";
import React, { useState } from "react";
import Slider from './swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function Post({profilePhoto, name, postDate, postText, postImage}) {

  const [currentColor, setcurrentColor] = useState(true)
   let colorChange = ()=>{
     setcurrentColor(!currentColor)
   }
   let classValue  =  localStorage.getItem("class");
 
  // let color;
  // if( classValue === "true"){
    // color="red"
  // }else {
  //   color="yellow"
  // }
  return (
    <div >
  <div className={`post ${classValue ==='true' ? 'yesPost':"noPost"}`} >
{/* <div className={color}>check </div> */}
    <div className='postHeader'>
      <img className='profilePhoto' src={profilePhoto} alt="profile" />
      <div>
        {name} <br />
        {postDate}
      </div>
    </div>
    
    <div className='postText'>
      {postText}
    </div>
    <img className='postImage' src={postImage} alt="post" />

    <hr />
    <div className='postFooter'>
      <div onClick={colorChange}> <FontAwesomeIcon className={currentColor? 'black':'yellow' 
      // (classValue === 'true' ? )
    }  icon={faThumbsUp} /> like </div>
      <div > <FontAwesomeIcon icon={faComment} /> comment</div>
      <div > <FontAwesomeIcon icon={faShare} /> share</div>
    </div>
    <hr />

  </div>
    </div>
  );
}
function Center () {
  // let classValue  =  localStorage.getItem("class");
  return <div className='Center'>
<div className="swiperSlider">
< Slider />
</div>

    <Post
      name="Arsalan"
      profilePhoto="./images/img1.png"
      postDate="13 Dec "
      postImage="./images/postimage1.jpg"
      postText="Alhamdulillah !!!
      Finally the wait is over and By the grace of Almighty Allah we are proudly present
      SAYLANI ASAN SADQA application.
      SADQA now just one click away !
      Download and rate as well !
       feeling proud at Saylani Welfare International Trust.."
    />
    <Post
      name="Malik"
      profilePhoto="./images/profileimage1.jpg"
      postDate="19 Jun "
      postImage="./images/postimage.jpg"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library."
    />
    <Post
      name="Rehan"
      profilePhoto="./images/profileimage2.jpg"
      postDate="2 Aug "
      postImage="./images/postimage2.jpg"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library."
    />
    <Post
      name="Saylani"
      profilePhoto="./images/profileimage3.jpg"
      postDate="23 May "
      postImage="./images/postimage3.jpg"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library."
/>


  </div>
  
}

export default Center;
