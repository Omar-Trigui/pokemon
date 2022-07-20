import * as React from "react";
import { Box, LinearProgress } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";

const Abilities = [
  "Hp",
  "Attack",
  "Defense",
  "Special-Attack",
  "Special-Defense",
  "Speed",
];

export default function AbilitiesCard() {
  const pokemon = useSelector((state) => state.pokemon);
  const getPokemonStat = (stats) => {
    const searchedStats = pokemon?.stats?.filter(
      (obj) => obj.name === stats.toLowerCase()
    );
    if (searchedStats) {
      return searchedStats[0].baseState;
    }
    return false;
  };
  return (
    <div className="AbilitiesCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <List
            dense
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {Abilities.map((value) => {
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <img
                        alt={value}
                        style={{ marginTop: "10px" }}
                        src={require(`../../assets/${value}.png`)}
                      />
                    </ListItemAvatar>
                    <Box key={value}>
                      <Typography variant="h6" sx={{ ml: 1 }} className="nomes">
                        {value} : {getPokemonStat(value)}
                      </Typography>

                      <LinearProgress
                        variant="determinate"
                        value={getPokemonStat(value)}
                        sx={{
                          width: 200,
                          height: 10,
                          mr: 5,
                          ml: 1,
                          background: "aliceblue",
                        }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
