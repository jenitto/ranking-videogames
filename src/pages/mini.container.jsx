import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CardGameHorizontal from "../components/cards/card-game-horizontal/card-game-horizontal";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import { getGamesByPlatforms } from "../services/rawg-service";
import { useGlobalLoading } from "../core/providers/GlobalLoaderProvider";

export default function MiniContainer() {
  let { id } = useParams();
  const { setIsLoading } = useGlobalLoading();
  const [selectedGames, setSelectedGames] = useState([]);
  const [games, setGames] = useState([]);
  const [params, setParams] = useState({ ordering: "-rating" });

  // API interaction
  const getGames = () => {
    setIsLoading(true);
    const res = getGamesByPlatforms(id, params);
    res
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => console.log("Error!", err));
  };

  useEffect(() => {
    getGames();
  }, [params, id]);

  const handleSearchValue = (e) => setParams({ ...params, search: e });
  const handleOrder = (e) => setParams({ ...params, ordering: e });
  // End API interaction

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (
      source.droppableId === "droppable1" &&
      source.droppableId === destination.droppableId
    ) {
      const items = reorder(selectedGames, source.index, destination.index);
      setSelectedGames(items);
    } else if (source.droppableId === "droppable2") {
      if (destination.droppableId === "droppable1") {
        const result = move(games, selectedGames, source, destination);
        setSelectedGames(result.droppable1);
        setGames(result.droppable2);
      }
    }
  };

  const grid = 4;

  const getListStyle = (isDraggingOver) => ({
    height: "100%",
    background: isDraggingOver ? "lightblue" : "lightgrey",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid,
    // background: isDragging ? "red" : "",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Grid container spacing={3}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid item sm={12} lg={6}>
          <Droppable droppableId="droppable1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {selectedGames.map((game, index) => (
                  <Grow key={game.id} in={true} timeout={50 * index}>
                    <Draggable
                      key={game.id}
                      draggableId={game.slug}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <CardGameHorizontal
                            key={game.id}
                            title={game.name}
                            subtitle={game.released?.substring(0, 4) || ""}
                            bgPhoto={game.background_image}
                            tag={
                              game.metacritic ||
                              Math.round((game.rating * 100) / game.rating_top)
                            }
                          />
                        </div>
                      )}
                    </Draggable>
                  </Grow>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item sm={12} lg={6}>
          <TextField
            label="Buscar..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleSearchValue(e.target.value)}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={params.ordering}
              onChange={(e) => handleOrder(e.target.value)}
            >
              <MenuItem value="name">Name (ASC)</MenuItem>
              <MenuItem value="-name">Name (DESC</MenuItem>
              <MenuItem value="rating">Rating (ASC)</MenuItem>
              <MenuItem value="-rating">Rating (DESC)</MenuItem>
              <MenuItem value="released">Year (ASC)</MenuItem>
              <MenuItem value="-released">Year (DESC)</MenuItem>
            </Select>
          </FormControl>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {games.map((game, index) => (
                  <Draggable
                    key={game.id}
                    draggableId={game.slug}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Grow in={true} timeout={50 * index}>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <CardGameHorizontal
                            title={game.name}
                            subtitle={game.released?.substring(0, 4) || ""}
                            bgPhoto={game.background_image}
                            tag={
                              game.metacritic ||
                              Math.round((game.rating * 100) / game.rating_top)
                            }
                          />
                        </div>
                      </Grow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </DragDropContext>
    </Grid>
  );
}
