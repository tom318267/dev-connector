import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperienceSection from "./ProfileExperienceSection";
import ProfileEducationSection from "./ProfileEducationSection";
import ProfileGitHub from "./ProfileGithub";
import {
  EditProfileButton,
  BackToProfilesButton,
  ProfileExperienceAndEducationContainer,
  ProfileExperience,
  ProfileExperienceMap,
  ProfileEducationMap,
  BackButtonContainer,
  ProfileEducation,
  NoExperienceContainer,
  NoEducationContainer,
  GithubReposContainer,
  GithubTitle,
  RepoDiv,
  RepoButtons,
  StarsButton,
  WatchersButton,
  ForksButton,
} from "./Profile.styles";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
  history,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <div>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <BackButtonContainer>
            <Link to="/profiles">
              <BackToProfilesButton>Back to Profiles</BackToProfilesButton>
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile">
                  <EditProfileButton>Edit Profile</EditProfileButton>
                </Link>
              )}
          </BackButtonContainer>

          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />

          <ProfileExperienceAndEducationContainer>
            {profile.experience.length > 0 ? (
              <ProfileExperienceMap>
                {profile.experience.map((experience) => (
                  <ProfileExperienceSection
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </ProfileExperienceMap>
            ) : (
              <NoExperienceContainer>
                No experience credentials
              </NoExperienceContainer>
            )}

            {profile.education.length > 0 ? (
              <ProfileEducationMap>
                {profile.education.map((education) => (
                  <ProfileEducationSection
                    key={education._id}
                    education={education}
                  />
                ))}
              </ProfileEducationMap>
            ) : (
              <NoEducationContainer>
                No education credentials
              </NoEducationContainer>
            )}
          </ProfileExperienceAndEducationContainer>
          {profile.githubusername && (
            <ProfileGitHub username={profile.githubusername} />
          )}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
