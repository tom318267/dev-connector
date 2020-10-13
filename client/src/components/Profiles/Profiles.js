import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import {
  DevelopersContainer,
  Title,
  SubHeadingContainer,
} from "./Profiles.styles";
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <DevelopersContainer>
            <Title>Developers</Title>
            <SubHeadingContainer>
              <i className="fab fa-connectdevelop"></i> Browse and connect with
              developers
            </SubHeadingContainer>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </DevelopersContainer>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
