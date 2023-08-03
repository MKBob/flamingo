import { useEffect, useState } from "react";
import { AppBar } from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import Logo from "../Assets/logo.png";
import {Drawer} from "@material-ui/core";
import {List} from "@material-ui/core";
import {Divider} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import { Spin as Hamburger } from "hamburger-react";
import Discord from "../Assets/discord.svg";
import Instagram from "../Assets/instagram.svg";
import Twitter from "../Assets/twitter.png";
import Opensea from "../Assets/opensea.svg";



const Navbar = (props) => {

  const [menuToggle, setMenuToggle] = useState(false);



  const list = () => (
    <Box
      onClick={() => setMenuToggle(false)}
      onKeyDown={() => setMenuToggle(false)}
    >
      <List>
        <ListItem className="drawer-item">
          <h3>
            <a href="#about">About</a>
          </h3>
        </ListItem>
        
        <ListItem className="drawer-item">
          <h3>
            <a href="#faq">FAQ</a>
          </h3>
        </ListItem>
        
        <ListItem className="drawer-item">
          <h3>
            <a
              style={{ cursor: "pointer" }}
            >
              Breeding
            </a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a
              style={{ cursor: "pointer" }}
            >
              Ladies Club
            </a>
          </h3>
        </ListItem>
        
      </List>
      <Divider />
      <div className="footer-socials" style={{ marginTop: "30px" }}>
        <img
          src={Discord}
        />
        <img
          src={Twitter}
        />
        <img
          src={Instagram}
        />
        <img
          src={Opensea}
        />
      </div>
      
    </Box>
  );

  return (
    <div className="navbar">
      <Drawer
        anchor="right"
        open={menuToggle}
        onClose={() => setMenuToggle(false)}
        PaperProps={{ className: "drawer" }}
      >
        {list()}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "transparent" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => window.location.replace("/")}
              >
                <img src={Logo} className="logo" alt="logo" />
                <a className="logo-text">Flamengo</a>
              </IconButton>
            </Typography>
            

            <div className="minter-navbar" style={{ marginRight: "50px" }}>
              {/* <div
                className="connect-button discord-btn"
              >
                Join Discord
              </div> */}
            </div>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginLeft: 0 }}
            >
            </IconButton>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginLeft: 0 }}
            >
              
              <Hamburger
                toggled={menuToggle}
                onToggle={(toggled) => setMenuToggle(!menuToggle)}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      
    </div>
  );
};



export default Navbar;
