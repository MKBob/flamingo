import React from 'react'
import { Grid } from '@material-ui/core'
import'./Home.css'
import imgHome from '../Assets/img-home.gif'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./Particle";


export default function Home() {
    const particlesInit = (engine) => {
        loadFull(engine);
      };
return (
    <div className='mainsec'>
    <Particles init={particlesInit} options={particlesOptions} />
    <Grid container justifyContent='center'>
    <Grid item lg={10} md={8} xs={8}>
    <div className='img-home'>
    <img src={imgHome} />
    </div>
    <div className='btn'>
        <button className='btn'>BUY ON OPENSEA</button>
    </div>
    </Grid>
    </Grid>
</div>
)
}
