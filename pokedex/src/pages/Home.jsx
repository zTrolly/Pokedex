import React, { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';
import { Container, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (let i = 1; i <= 151; i++) {
      endpoints.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    axios
      .all(endpoints)
      .then((responses) => {
        const data = responses.map((response) => response.data);
        console.log(data);
        setPokemons(data);
        setIsLoading(false); // Atualiza o estado para indicar que o carregamento foi concluído
      })
      .catch((error) => console.log(error));
  };

  const filterPokemons = (event) => {
    if (event.target.value === '') {
      getPokemons();
      return;
    }
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(event.target.value.toLowerCase()),
    );
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar filterPokemons={filterPokemons} hideNavbar={false} />
      <Container maxWidth={false}>
        {isLoading ? ( // Verifica se está carregando os dados
          <div display={'flex'}>
            <CircularProgress />
          </div> // Mostra o indicador de carregamento
        ) : (
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.name}>
                <CardPokemon
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  pomemonType={pokemon.types[0].type.name}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};
