import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={TagIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
      Tweet
      </Button>
    </div>
  );
}

export default Sidebar;