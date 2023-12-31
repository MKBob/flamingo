import * as React from "react";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import {Grid} from "@material-ui/core";

export default function Faq() {
  return (
    <Container className="container" id="faq">
      <Grid container lg={12} md={12} xs={12} justifyContent='center'>
        <Grid item xs={12}>
      <h1 data-aos="fade-in">FAQ'S</h1>
      <div className="main-accordian">
      <div data-aos="fade-right" className="frst-div">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>How much is a Fat Ape NFT?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              The Public Sale starts on November 1st, 2021, at 9 PM EST. Price
              Starts at 0.3 ETH + gas for 6 hours. If the collection is not sold
              out by then, price drops to 0.25 ETH + gas after the initial 6
              hours. If the collection is still not sold out after those 12
              hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>Where can I view my Fat Ape NFTs?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              Once you have minted a Fat Ape NFT, you will be able to see it by
              connecting your crypto wallet to OpenSea.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>Will there be a presale?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              Yes, we will be holding a presale 1 day prior to the public launch
              for our Whitelist members. Please join our Discord to learn how
              you can join the Whitelist. The Whitelist spots will be very
              limited.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>When will we be able to mint Fat Apes?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              The public launch will be held on November 1st, 2021, at 9 PM EST,
              while the presale will be held October 31st at 4 PM EST
            </p>
          </AccordionDetails>
        </Accordion>
        </div>
        <div data-aos="fade-left" className="scnd-div">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>What can I do with my Fat Ape?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              You can use your Fat Ape as a profile picture online, and you can
              also resell your Fat Apes for profit. Once breeding functions
              launch, you will be able to earn Fat Ape tokens daily. If you
              accumulate enough, you will be able to burn these tokens to
              generate new, stronger apes.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>Are there secondary sale royalties?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              Yes, 10% of the secondary sales will be deducted in royalties for
              the Fat Ape team.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>Do I own the Fat Ape after minting it?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              Yes, you will own all intellectual properties to the Fat Ape,
              which means you can use it to create and sell merch.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={
              <ExpandMore
                style={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>What is flamengo club?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details">
              Yes, you will own all intellectual properties to the Fat Ape,
              which means you can use it to create and sell merch.
            </p>
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
      </Grid>
      </Grid>
    </Container>
  );
}
