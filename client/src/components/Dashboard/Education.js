import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import {
  EducationTable,
  EducationTableDiv,
  EducationDeleteButton,
} from "./Education.styles";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <EducationDeleteButton onClick={() => deleteEducation(edu._id)}>
          Delete
        </EducationDeleteButton>
      </td>
    </tr>
  ));
  return (
    <EducationTableDiv>
      <h2>Education Credentials</h2>
      <EducationTable>
        <thead>
          <tr className="table-header">
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </EducationTable>
    </EducationTableDiv>
  );
};

export default connect(null, { deleteEducation })(Education);
