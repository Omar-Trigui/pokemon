import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./index.css";
import { useSelector } from "react-redux";

export default function DescriptionCard() {
  const pokemon = useSelector((state) => state.pokemon);
  return (
    <div className="DescriptionCard">
      <Card sx={{ minWidth: 364 }}>
        <CardMedia
          component="img"
          height="140"
          width="240"
          sx={{ width: 300, height: 184 }}
          image={pokemon.image}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            POKEMON TYPE : {pokemon.type}
          </Typography>
          <Card>
            <CardContent>
              {pokemon.moves && (
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={pokemon?.moves[0] || ""}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={pokemon?.moves[1] || ""}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={pokemon?.moves[2] || ""}
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
