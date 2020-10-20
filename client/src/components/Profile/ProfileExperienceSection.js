import React from "react";
import Moment from "react-moment";
import { ProfileExperience } from "./Profile.styles";

const ProfileExperienceSection = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <ProfileExperience>
      <h2>Experience</h2>
      <h3>{company}</h3>
      <h3>
        <Moment format="MM/DD/YYYY">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="MM/DD/YYYY">{to}</Moment>}
      </h3>
      <h3>
        <strong>Position: </strong> {title}
      </h3>
      <h3>
        <strong>Description: </strong>
        <p>{description}</p>
      </h3>
    </ProfileExperience>
  );
};

export default ProfileExperienceSection;
