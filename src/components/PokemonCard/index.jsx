import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'

export default function PokemonCard({ name,image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[1].type.name;
    }
  }
  const typeHandlerUC = () => {
    if (types[1]) {
      return types[1].type.name.toUpperCase();
    }
  }
  return (
    <Card sx={{ maxWidth: 345, background: "#0F1111", imageRendering: "pixelated" }} >
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="pokemons"
      />
      <CardContent>
        <Box>
          <Typography gutterBottom variant="h4" component="div" sx={{color: "black"}}>
            <strong>{name}</strong>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <Box>
              <Box component="span" sx={{ p: 1, border: '5px black', borderRadius: '17px', marginRight: "10px", fontWeight: "600" }} className = {types[0].type.name}>{ types[0].type.name.toUpperCase() }</Box>
              <Box component="span" sx={{ p: 1, border: '5px black', borderRadius: '17px', fontWeight: "600" }} className = {typeHandler()} > {typeHandlerUC()}</Box>
            </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}