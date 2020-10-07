import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { CreateProfileButton } from "./Dashboard.styles";
import DashboardActions from "./DashboardActions";
import { DashboardContainer, DeleteAccountButton } from "./Dashboard.styles";
import Experience from "../Dashboard/Experience";
import Education from "../Dashboard/Education";
import { deleteAccount } from "../../actions/profile";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <h3>
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </h3>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <DeleteAccountButton onClick={() => deleteAccount()}>
            <i className="fas fa-user-minus"></i> Delete My Account
          </DeleteAccountButton>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile">
            <CreateProfileButton>Create Profile</CreateProfileButton>
          </Link>
        </Fragment>
      )}
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
