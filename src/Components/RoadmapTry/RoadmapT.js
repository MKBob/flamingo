import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./RoadmapT.css";

export default function RoadmapT() {
  return (
    <div className="rd-map">
      <div data-aos="fade-up">
        <h1
          style={{
            paddingBottom: "5rem",
          }}
        >
          Roadmap
        </h1>
      </div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" className="dots">
              0%
            </TimelineDot>
            <TimelineConnector className="lines" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="hdngs">WELCOME TO THE CLUB!</h3>
            <p data-aos="fade-left" className="paras">
            Our team will start implementing breeding functions in the
              upcoming weeks after the launch, which will allow Fat Apes holders
              to receive tokens and burn them to create new, stronger apes. In
              order to benefit from these breeding functions, you must own at
              least 2 Fat Apes.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" className="dots">
              25%
            </TimelineDot>
            <TimelineConnector className="lines" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="hdngs1">ENTRÉE DE CAVIAR</h3>
            <p data-aos="fade-right" className="paras1">
            Our team will start implementing breeding functions in the
              upcoming weeks after the launch, which will allow Fat Apes holders
              to receive tokens and burn them to create new, stronger apes. In
              order to benefit from these breeding functions, you must own at
              least 2 Fat Apes.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" className="dots">
              50%
            </TimelineDot>
            <TimelineConnector className="lines" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="hdngs">DRIPPY</h3>
            <p data-aos="fade-left" className="paras">
            Our team will start implementing breeding functions in the
              upcoming weeks after the launch, which will allow Fat Apes holders
              to receive tokens and burn them to create new, stronger apes. In
              order to benefit from these breeding functions, you must own at
              least 2 Fat Apes.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" className="dots">
              75%
            </TimelineDot>
            <TimelineConnector className="lines" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="hdngs1">TO THE MOON!</h3>
            <p data-aos="fade-right" className="paras1">
            Our team will start implementing breeding functions in the
              upcoming weeks after the launch, which will allow Fat Apes holders
              to receive tokens and burn them to create new, stronger apes. In
              order to benefit from these breeding functions, you must own at
              least 2 Fat Apes.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" className="dots">
              100%
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="hdngs">BREEDING</h3>
            <p data-aos="fade-left" className="paras">
              Our team will start implementing breeding functions in the
              upcoming weeks after the launch, which will allow Fat Apes holders
              to receive tokens and burn them to create new, stronger apes. In
              order to benefit from these breeding functions, you must own at
              least 2 Fat Apes.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
