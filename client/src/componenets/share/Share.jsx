import { Avatar, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import './share.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Avatar src="/assets/person/1.jpg" />
          <input className="shareInput" placeholder="Share your day" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <IconButton>
                <AddAPhotoIcon htmlColor="tomato" />
                <Typography className="shareOptionText" component="div">
                  Photo/Video
                </Typography>
              </IconButton>
            </div>
            <div className="shareOption">
              <IconButton>
                <LocalOfferIcon htmlColor="blue" />
                <Typography className="shareOptionText" component="div">
                  Tag
                </Typography>
              </IconButton>
            </div>
            <div className="shareOption">
              <IconButton>
                <AddLocationAltIcon htmlColor="green" />
                <Typography className="shareOptionText" component="div">
                  Location
                </Typography>
              </IconButton>
            </div>
            <div className="shareOption">
              <IconButton>
                <EmojiEmotionsIcon htmlColor="glodenrod" />
                <Typography className="shareOptionText" component="div">
                  Emoji
                </Typography>
              </IconButton>
            </div>
          </div>
          <Button color="secondary">Share</Button>
        </div>
      </div>
    </div>
  );
}

export default Share;
