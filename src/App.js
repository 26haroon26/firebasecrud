import { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  serverTimestamp,
  updateDoc,
  onSnapshot,
  deleteDoc,
  orderBy,
} from "firebase/firestore";

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
  const [file, setfile] = useState(null);
  const [Editing, setEditing] = useState({
    editingId: null,
    editingText: "",
  });

  useEffect(() => {
    //  For read Data

    // const getPostData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   querySnapshot.forEach((doc) => {
    //     // console.log(`${doc.id} => `, doc.data());

    //     setPosts((prev) => {
    //       let newArray = [...prev, doc.data()];
    //       return newArray;
    //     });
    //   });
    // };
    // getPostData();

    let unsubscribe = null;

    const getRealTimeData = async () => {
      const q = query(collection(db, "posts"), orderBy("time", "desc"));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];

        querySnapshot.forEach((doc) => {
          // posts.unshift(doc.data()); ye bhi tariqa he descending krne ka
          // posts.push(doc.data()); is ko naye tariqe se push kr rhe hen

          posts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(posts);
        console.log("posts: ", posts);
      });
    };
    getRealTimeData();
    return () => {
      // console.log("clean: ");
      unsubscribe();
    };
  }, []);

  const SavePost = async (e) => {
    e.preventDefault();
    console.log("postData", postData);

    const cloudinaryData = new FormData();
    cloudinaryData.append("file", file);
    cloudinaryData.append("upload_preset", "postPhotoFacebook");
    cloudinaryData.append("cloud_name", "haroon123");
    console.log("cloudinaryData", cloudinaryData);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/haroon123/image/upload`,
        cloudinaryData,
        {
          header: {
            "Content-Type": "multipart/from-data",
          },
        }
      )
      .then((res) => {
        console.log("from then", res.data);

        try {
          const docRef = addDoc(collection(db, "posts"), {
            text: postData,
            time: serverTimestamp(),
            img: res?.data?.url,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
  };

  const DeletePost = async (postId) => {
    // console.log(postId);
    await deleteDoc(doc(db, "posts", postId));
  };
  const UpdatePost = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "posts", Editing.editingId), {
      text: Editing.editingText,
    });
    setEditing({
      editingId: null,
      editingText: "",
    });
  };
  return (
    <div>
      <form onSubmit={SavePost} className="form">
        <input
          className="input"
          type="text"
          placeholder="What's in your mind..."
          onChange={(e) => {
            setpostData(e.target.value);
          }}
        />
        <input
          type={"file"}
          id="image"
          onChange={(e) => {
            setfile(e.currentTarget.files[0]);
          }}
        />
        <button type="submit" className="button">
          GetPost
        </button>
      </form>
      <div className="body">
        <div className="flex">
          {Posts.map((eachPost, i) => (
            <div className="post" key={i}>
              <div className="postText">
                <h3 className="postDescr">
                  {eachPost.id === Editing.editingId ? (
                    <form className="NextForm" onSubmit={UpdatePost}>
                      <input
                        type="text"
                        className="input"
                        value={Editing.editingText}
                        onChange={(e) => {
                          setEditing({
                            ...Editing,
                            editingText: e.target.value,
                          });
                        }}
                        placeholder="Please Enter Updated Value"
                      />
                      <button type="submit" className="button next">
                        Update
                      </button>
                    </form>
                  ) : (
                    eachPost?.text
                  )}
                </h3>

                <span>
                  {moment(
                    eachPost?.time?.seconds
                      ? eachPost?.time.seconds * 1000
                      : undefined
                  ).format("Do MMMM, h:mm a")}
                </span>
                <img
                  src={eachPost?.img}
                  alt=""
                  id="images"
                  height={"200px"}
                  width={"200px"}
                />
                <br />
                <div className="NextForm">
                  <button
                    className="button"
                    onClick={() => {
                      DeletePost(eachPost?.id);
                    }}
                  >
                    Delete
                  </button>
                  {Editing.editingId === eachPost?.id ? null : (
                    <button
                      className="button"
                      onClick={() => {
                        setEditing({
                          editingId: eachPost?.id,
                          editingText: eachPost?.text,
                        });
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
