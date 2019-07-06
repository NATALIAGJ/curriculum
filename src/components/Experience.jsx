import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";

const Experience = props => (
  console.log(props.data[0].jobTitle),
  <div className="Experience">
    <H2Styled name={"Experience"} />
    <div className="Experience-container">
      {props.data.map((exp, index) => (
        <div className="Experience-item" key={`Experience-${index}`}>
          <H3Styled>
            {exp.jobTitle} @ {exp.company} 
            <span>
            {exp.startDate} - {exp.endDate}
            </span>
          </H3Styled>
          <PStyled name={exp.jobDescrition} />
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
