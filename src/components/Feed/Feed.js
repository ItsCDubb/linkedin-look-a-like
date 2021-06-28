import React, { useEffect, useState } from "react";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InputButton from "./InputButton/InputButton";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import { db } from "../../firebase";
import firebase from "firebase";
import Post from "./Post/Post";
import "./Feed.css";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const sendPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: "Chris Warren",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__input-container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__icons">
          <InputButton Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputButton Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputButton Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputButton
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {posts.map(({ data: { name, description, message, photoUrl }, id }) => (
        <Post
          key={id}
          description={description}
          message={message}
          name={name}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
