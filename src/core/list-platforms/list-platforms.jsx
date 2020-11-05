import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemPlatform from "./list-item-platform/list-item-platform";
import { getParentPlatforms } from "../../services/rawg-service";

export default function ListPlatforms() {
  const [parentPlatforms, setParentPlatforms] = useState([]);

  useEffect(() => {
    getParentPlatforms()
      .then((res) => {
        setParentPlatforms(res.data.results);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }, []);

  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Platforms
        </ListSubheader>
      }
    >
      {parentPlatforms.map((item) => (
        <ListItemPlatform parentPlatform={item} />
      ))}
    </List>
  );
}
