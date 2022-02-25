import React, { forwardRef, useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from  "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
  const [addLike, setAddLike] = useState(0);
  const [addRetweet, setAddRetweet] = useState(0);

  useEffect(() => {
    console.log(addLike)
    console.log(addRetweet)
  }, [addLike, addRetweet])
  

  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedIcon className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=" " />
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />

          {addRetweet ? <>
            <span>
              <RepeatIcon className="footerButton" fontSize="small" onClick={() => setAddRetweet(addRetweet + 1)} />
              {addRetweet}
            </span>
          </> : <>  
            <RepeatIcon className="footerButton" fontSize="small" onClick={() => setAddRetweet(addRetweet + 1)} />
          </>}
          
          {addLike ? <>
            <span>
              <FavoriteBorderIcon className="footerButton" fontSize="small" onClick={() => setAddLike(addLike + 1)} />
              {addLike}
            </span>
          </> : <>
            <FavoriteBorderIcon className="footerButton" fontSize="small" onClick={() => setAddLike(addLike + 1)} />
          </>}
          
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
