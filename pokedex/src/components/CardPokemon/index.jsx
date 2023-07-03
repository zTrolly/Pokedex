import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardPokemon({ name, image, pomemonType }) {
  const typeColors = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    dragon: '#6F35FC',
    ice: '#96D9D6',
    psychic: '#F95587',
    dark: '#705746',
    fairy: '#D685AD',
  };

  const getPokemonTypeColor = (pomemonType) => {
    return typeColors[pomemonType] || '#000000'; // Caso o tipo não esteja mapeado, retorna uma cor padrão
  };

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  const cardStyle = {
    maxWidth: 345,
    backgroundColor: getPokemonTypeColor(pomemonType),
    transition: 'box-shadow 0.3s ease',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2)',
    '&:hover': {
      boxShadow: `0 0 8px 2px ${getPokemonTypeColor(pomemonType)}`,
    },
    cursor: 'pointer',
  };

  const nameStyle = {
    fontFamily: 'Press Start 2P',
    fontSize: '16px',
    color: 'white', // Manter o nome do Pokémon preto
    lineHeight: '24px',
    height: '20px', // Defina aqui o tamanho fixo desejado para o contêiner do nome
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={{
          height: 200,
          alignContent: 'center',
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
        image={image}
        title={name}
      />
      <CardContent sx={{ backgroundColor: 'black' }}>
        <Typography gutterBottom variant="h5" component="div" sx={nameStyle}>
          {formattedName}
        </Typography>
      </CardContent>
    </Card>
  );
}
