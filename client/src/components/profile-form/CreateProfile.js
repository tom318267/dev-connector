import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createProfile } from "../../actions/profile";
import {
  CreateProfileContainer,
  CreateProfileHeader,
  CreateProfileForm,
  CreateProfileSocialDiv,
  OptionalDiv,
  SubmitDiv,
} from "./CreateProfile.styles";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    skills: "",
    status: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    skills,
    status,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <CreateProfileContainer>
      <CreateProfileForm onSubmit={(e) => onSubmit(e)}>
        <CreateProfileHeader>
          <h1>Create Your Profile</h1>
          <h3>
            <i className="fas fa-user"></i> Let's get some information to make
            your profile stand out
          </h3>
        </CreateProfileHeader>
        <small>* = required field</small>
        <select
          name="status"
          value={status}
          onChange={(e) => onChange(e)}
          required
        >
          <option value="0">* Select Professional Status </option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <small>Give us an idea where you are at in your career</small>

        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={(e) => onChange(e)}
        />
        <small>Could be your own company or one you work for</small>

        <input
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={(e) => onChange(e)}
        />
        <small>Could be your own or a company website</small>

        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={(e) => onChange(e)}
        />
        <small>City & State suggested (e.g. Boston, MA)</small>

        <input
          type="text"
          placeholder="* Skills"
          name="skills"
          value={skills}
          onChange={(e) => onChange(e)}
          required
        />
        <small>
          Please use comma separated values (e.g. HTML, CSS, Javascript, PHP)
        </small>

        <input
          type="text"
          placeholder="Github Username"
          name="githubusername"
          value={githubusername}
          onChange={(e) => onChange(e)}
        />
        <small>
          If you want your latest repos and a Github link, include your username
        </small>
        <textarea
          placeholder="A short bio of yourself"
          name="bio"
          value={bio}
          onChange={(e) => onChange(e)}
        ></textarea>
        <small>Tell us a little bit about yourself</small>

        <OptionalDiv>
          <button
            type="button"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links
          </button>
          <small>Optional</small>
        </OptionalDiv>

        {displaySocialInputs && (
          <Fragment>
            <CreateProfileSocialDiv>
              <div className="input-container">
                <i className="fab fa-twitter"></i>
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="input-container">
                <i className="fab fa-facebook"></i>
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="input-container">
                <i
                  style={{ fontSize: "1.8rem" }}
                  className="fab fa-youtube"
                ></i>
                <input
                  type="text"
                  placeholder="Youtube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="input-container">
                <i
                  style={{ fontSize: "2.3rem" }}
                  className="fab fa-linkedin"
                ></i>
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="input-container">
                <i
                  style={{ fontSize: "2.3rem" }}
                  className="fab fa-instagram"
                ></i>
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </CreateProfileSocialDiv>
          </Fragment>
        )}

        <SubmitDiv>
          <button id="submit-button">Submit</button>
          <Link to="/dashboard">
            <button id="go-back">Go Back</button>
          </Link>
        </SubmitDiv>
      </CreateProfileForm>
    </CreateProfileContainer>
  );
};

export default connect(null, { createProfile })(CreateProfile);
