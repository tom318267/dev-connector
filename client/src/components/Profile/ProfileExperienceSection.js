import React from "react";
import Moment from "react-moment";
import {
  ProfileExperienceContainer,
  ProfileExperience,
} from "./Profile.styles";

const ProfileExperienceSection = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <ProfileExperience>
      <h2>Experience</h2>
      <h3>{company}</h3>
      <h3>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
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
