import * as React from "react";
import { Container } from "@material-ui/core";
import {Grid} from "@material-ui/core";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";

export default function OurTeam() {
  return (
    <Container className="container" id="team">
      <h1 data-aos="fade-in">Team</h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img data-aos="flip-left" className="team-img" src={img1} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Keyboard</h3>
            <p>Senior Programmer</p>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img data-aos="flip-left" className="team-img" src={img2} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Chief</h3>
            <p>Marketing Genius</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img data-aos="flip-left" className="team-img" src={img3} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@DJ Fat Ape</h3>
            <p>Chief of Communications</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img data-aos="flip-left" className="team-img" src={img4} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Barista</h3>
            <p>Art Director</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
