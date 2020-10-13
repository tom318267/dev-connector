import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addExperience } from "../../actions/profile";
import {
  ExperienceContainer,
  ExperienceForm,
  ExperienceHeader,
  ExperienceCheckDiv,
  ExperienceSubmitGroup,
} from "../../components/profile-form/AddExperience.styles";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <ExperienceContainer>
      <ExperienceForm
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <ExperienceHeader>
          <h1>Add An Experience</h1>
          <h3>
            Add any developer/programming positions that you have had in the
            past
          </h3>
        </ExperienceHeader>
        <small id="asterisk">* = required field</small>
        <input
          className="input-element"
          type="text"
          name="title"
          placeholder="* Job Title"
          value={title}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          className="input-element"
          type="text"
          name="company"
          placeholder="* Company"
          value={company}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          className="input-element"
          type="text"
          name="location"
          placeholder="Location"
          value={location}
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
        <ExperienceCheckDiv>
          <input
            type="checkbox"
            checked={current}
            value={current}
            onChange={(e) => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />
          Current Job
        </ExperienceCheckDiv>

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
          placeholder="Job Description"
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        ></textarea>
        <ExperienceSubmitGroup>
          <button>Submit</button>
          <Link to="/dashboard">
            <button id="go-back">Go Back</button>
          </Link>
        </ExperienceSubmitGroup>
      </ExperienceForm>
    </ExperienceContainer>
  );
};

export default connect(null, { addExperience })(AddExperience);
