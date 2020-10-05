import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { CreateProfileButton } from "./Dashboard.styles";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div>
      <h1>Dashboard</h1>
      <h3>
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </h3>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile">
            <CreateProfileButton>Create Profile</CreateProfileButton>
          </Link>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
