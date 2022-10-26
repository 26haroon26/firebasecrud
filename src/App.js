// 1 : 36 minute
import { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
import moment from "moment";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUnoboaWcVh3P2q9TMmc6yW8EtQC0XEuw",
  authDomain: "socialmediaapp-d9873.firebaseapp.com",
  projectId: "socialmediaapp-d9873",
  storageBucket: "socialmediaapp-d9873.appspot.com",
  messagingSenderId: "121456148400",
  appId: "1:121456148400:web:087cebaa92781388666075",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function App() {
  const [postData, setpostData] = useState("");
  const [Posts, setPosts] = useState([]);
  // const [loading, setloading] = useState(false);

  useEffect(() => {
    const getPostData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data());
        setPosts([...Posts,doc.data()])
        getPostData();
      });
    };
  }, []);

  const SavePost = async (e) => {
    e.preventDefault();
    console.log("postData", postData);
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postData,
        time: new Date().getTime(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <form onSubmit={SavePost} className="form">
        <textarea
          className="input"
          type="text"
          placeholder="What's in your mind..."
          onChange={(e) => {
            setpostData(e.target.value);
          }}
        />
        <button type="submit" className="button">
          Post
        </button>
      </form>
      {/* {loading ? "loading..." : ""} */}
      <div className="body">
        <div className="flex">
          {Posts.map((eachPost) => (
            <div className="post" key={eachPost?.time}>
              <div className="postText">
                {/* <a
                  className="title"
                  href={eachPost?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {eachPost?.name}
                </a>

                <span>
                  {moment(eachPost?.datePublished).format("Do MMMM, h:mm a")}
                </span> */}

                <h3 className="postDescr">{eachPost?.text}</h3>
              </div>
{/* 
              <img
                src={eachPost?.image?.thumbnail?.contentUrl
                  .replace("&pid=News", "")
                  .replace("pid=News&", "")
                  .replace("pid=News", "")}
                alt=""
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
