import React, { useState, useEffect } from "react";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import ListPlatforms from "../list-platforms/list-platforms";
import Header from "../header/header";
import Games from "../../pages/games";
import Home from "../../pages/home";
import MiniContainer from "../../pages/mini.container";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItem: { maxHeight: "48px" },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Layout({ isLoading }) {
  const location = useLocation();

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => setDrawerOpen(false), [location]);

  const _handleToggleDrawer = () => setDrawerOpen(!drawerOpen);

  const renderMenu = () => (
    <>
      <ListItem button component={Link} exact to={`/mini/79`}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="SNES-Mini" />
      </ListItem>
      <ListPlatforms />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        className={classes.appBar}
        onToggleDrawerMode={_handleToggleDrawer}
        isLoading={isLoading}
      ></Header>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={_handleToggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {renderMenu()}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" className={classes.drawer}>
          <Toolbar />
          <div className={classes.drawerContainer}>{renderMenu()}</div>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path="/platform/:id">
            <Games />
          </Route>
          <Route path="/mini/:id">
            <MiniContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
