import React from 'react'
import "./Welcome.css"
import Grid from '@material-ui/core/Grid';


const Welcome = () => {
  return (
    <div className='main-div'>
<section >
<Grid container justifyContent='space-evenly'>
    <Grid item lg={10} md={10} xs={10}>
        <div  className='main_root'>
            <div data-aos="fade-right">
        <img className='img_sec' src="../Assets/img-wel.png" alt="" />
        </div>
       
        <div data-aos="fade-up">
<h1 className='text'>Welcome</h1>
<p className='text_one'>Welcome to the Fat Ape Club, a tribe of 9,999 obese apes that <br /> partied too much and didn’t exercise enough.</p>
<p  className='text_one'>Years ago, the Fat Apes used to live together on a remote island in the Pacific Ocean. However, most of them were captured by poachers, who then sold the Fat Apes to multiple zoos around the world for profit. Last week, 10 Fat Apes escaped from those zoos after being held captive for more than 20 years. They are now on their way to free their colleagues, but their ultimate goal remains unclear…</p>
</div>

        </div>

    </Grid>
</Grid>
</section>

    </div>
  )
}

export default Welcome;