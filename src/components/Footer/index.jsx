import * as React from 'react';
import Box from '@mui/material/Box'; 
import './index.css'
export default function Footer(){
    return(
        <Box sx={{ backgroundColor:"#C22E29", display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center", height: "50px"}}>
            <a href="https://github.com/marciusvic" target="_blank" rel="noreferrer" className='a-footer'>
            <i class="devicon-github-original"></i>
            marciusvic
            </a>
        </Box>
    )
}