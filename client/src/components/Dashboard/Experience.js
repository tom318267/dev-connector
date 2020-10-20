import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import {
  ExperienceTable,
  ExperienceTableDiv,
  ExperienceDeleteButton,
} from "./Experience.styles";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="MM/DD/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="MM/DD/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <ExperienceDeleteButton onClick={() => deleteExperience(exp._id)}>
          Delete
        </ExperienceDeleteButton>
      </td>
    </tr>
  ));
  return (
    <ExperienceTableDiv>
      <h2>Experience Credentials</h2>
      <ExperienceTable>
        <thead>
          <tr className="table-header">
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </ExperienceTable>
    </ExperienceTableDiv>
  );
};

export default connect(null, { deleteExperience })(Experience);
