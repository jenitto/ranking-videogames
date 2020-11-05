import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Icon306752Gaming from "../../../components/Icons/Icon-306752-gaming";
import IconFont from "../../../components/icon/icon-font";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ListItemPlatform({ parentPlatform }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const getListButton = (item, isNested) => (
    <ListItem
      key={item.id}
      className={isNested ? classes.nested : ""}
      button
      component={Link}
      exact
      to={`/platform/${item.id}`}
    >
      <ListItemAvatar>
        <Avatar>
          <Icon306752Gaming
            kind="049-game console"
            onClick={() => alert("clicked on icon")}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.name} />
    </ListItem>
  );

  return parentPlatform.platforms.length === 1 ? (
    getListButton(parentPlatform.platforms[0])
  ) : (
    <>
      <ListItem button key={parentPlatform.id} onClick={handleClick}>
        <ListItemAvatar>
          <Avatar>
            <IconFont icon="icon-playstation1"></IconFont>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={parentPlatform.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {parentPlatform.platforms.map((item) => getListButton(item, true))}
      </Collapse>
    </>
  );
}
