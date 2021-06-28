import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import InputButton from "../InputButton/InputButton";
import { Avatar } from "@material-ui/core";
import "./Post.css";

function Post({ description, message, name, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputButton Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputButton Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputButton Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputButton Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
