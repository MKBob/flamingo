import * as React from "react";
import { Accordion } from "@material-ui/core";
import {AccordionSummary }from "@material-ui/core";
import {AccordionDetails} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {ExpandMore} from '@material-ui/icons'
import {Container} from "@material-ui/core";
import {Box} from "@material-ui/core";
import Logo from "../Assets/logo.png";
import Discord from "../Assets/discord.svg";
import Instagram from "../Assets/instagram.svg";
import Twitter from "../Assets/twitter.png";
import Opensea from "../Assets/opensea.svg";

export default function Footer() {
  return (
    <Container className="footer-container">
      <Box className="footer-box">
        <img src={Logo} />
        <div>
          <a className="logo-text-footer">Flamengo</a>
        </div>
        
        <div className="footer-socials">
          <img
            src={Discord}
            onClick={() =>
              window.open("https://discord.com/", "_blank")
            }
          />
          <img
            src={Twitter}
            onClick={() =>
              window.open("https://twitter.com/", "_blank")
            }
          />
          <img
            src={Instagram}
            onClick={() =>
              window.open("https://www.instagram.com/", "_blank")
            }
          />
          <img
            src={Opensea}
            onClick={() =>
              window.open(
                "https://opensea.io",
                "_blank"
              )
            }
          />
        </div>
        <hr
        style={{
          lineHeight:'3px',
          border:'1px solid',
          marginTop:'5%'
        }}
        />
        <p
        style={{
          opacity:'70%'
        }}
        >All Rights Reserved 2022</p>
        <p
        style={{
          opacity:'70%'
        }}
        >
          <a
            className="terms-btn"
            onClick={() => window.location.replace("/terms")}
          >
            Terms and conditions
          </a>
        </p>
        <p>
        </p>
      </Box>
    </Container>
  );
}
