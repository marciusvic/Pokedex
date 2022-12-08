import React from 'react'
import Navbar from '../components/NavBar/index'
import PokemonCard from '../components/PokemonCard/index'
import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Home.css'

export const Home = ()=>{
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        getPokemons();
    }, []);
    const getPokemons = () =>{
        var endpoints = [];
        for(var i = 1; i < 152; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response; 
    };

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
          getPokemons();
        }
        for (var i in pokemons) {
          if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
          }
        }
    
        setPokemons(filteredPokemons);
      };
    
    return(
        <div className="home">
            <Navbar pokemonFilter = {pokemonFilter}/>
            <Container maxWidth = "false" className = "home-container">
                <Grid container spacing={3} sx = {{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center"}}>
                    {pokemons.map((pokemon, key) =>(
                        <Grid item xs = {12} sm = {6} md = {4} lg = {4} xl = {3} key = {key} sx = {{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center"}} className = "home-div-grid">
                        <PokemonCard name={pokemon.data.name.toUpperCase()} image={pokemon.data.sprites.front_default} types={pokemon.data.types}></PokemonCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}