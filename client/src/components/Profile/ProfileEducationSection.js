import React from "react";
import { ProfileEducation } from "./Profile.styles";
import Moment from "react-moment";

const ProfileEducationSection = ({
  education: { school, degree, fieldofstudy, to, from, current, description },
}) => {
  return (
    <ProfileEducation>
      <h2>Education</h2>
      <h3>{school}</h3>
      <h3>
        <Moment format="MM/DD/YYYY">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format="MM/DD/YYYY">{to}</Moment>}
      </h3>
      <h3>
        Degree: <p>{degree}</p>
      </h3>
      <h3>{fieldofstudy}</h3>
      <h3>
        Description: <p>{description}</p>
      </h3>
    </ProfileEducation>
  );
};

export default ProfileEducationSection;
