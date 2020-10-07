import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addEducation } from "../../actions/profile";
import {
  EducationContainer,
  EducationForm,
  EducationHeader,
  EducationCheckDiv,
  EducationSubmitGroup,
} from "../../components/profile-form/AddEducation.styles";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <EducationContainer>
      <EducationForm
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <EducationHeader>
          <h1>Add An Education</h1>
          <h3>Add any school or bootcamp that you have attended</h3>
        </EducationHeader>
        <small id="asterisk">* = required field</small>
        <input
          className="input-element"
          type="text"
          name="school"
          placeholder="* School or Bootcamp"
          value={school}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-element"
          type="text"
          name="degree"
          placeholder="* Degree or Certificate"
          value={degree}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-element"
          type="text"
          name="fieldofstudy"
          placeholder="Field of Study"
          value={fieldofstudy}
          onChange={(e) => onChange(e)}
        />
        <label>From Date</label>
        <input
          className="input-element"
          type="date"
          name="from"
          placeholder="mm/dd/yyyy"
          value={from}
          onChange={(e) => onChange(e)}
        />
        <EducationCheckDiv>
          <input
            type="checkbox"
            checked={current}
            value={current}
            onChange={(e) => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />
          Current School
        </EducationCheckDiv>

        <label>To Date</label>
        <input
          className="input-element"
          type="date"
          name="to"
          placeholder="mm/dd/yyyy"
          value={to}
          onChange={(e) => onChange(e)}
          disabled={toDateDisabled ? "disabled" : ""}
        />
        <textarea
          className="input-element"
          placeholder="Program Description"
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        ></textarea>
        <EducationSubmitGroup>
          <button>Submit</button>
          <Link to="/dashboard">
            <button id="go-back">Go Back</button>
          </Link>
        </EducationSubmitGroup>
      </EducationForm>
    </EducationContainer>
  );
};

export default connect(null, { addEducation })(AddEducation);
