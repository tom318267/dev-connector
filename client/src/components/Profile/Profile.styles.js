import styled from "styled-components";

export const BackButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const BackToProfilesButton = styled.button`
  margin: 40px 10px 0 0;
  font-size: 1rem;
  padding: 12px;
  background-color: #14a693;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const EditProfileButton = styled.button`
  margin-top: 40px;
  font-size: 1rem;
  padding: 12px;
  background-color: #eaeaea;
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 12px auto;
  padding: 40px 0;
  background-color: #14a693;
  color: #14a693;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 10px;
`;

export const ProfileName = styled.h2`
  padding-bottom: 10px;
  color: white;
`;

export const ProfileJobTitle = styled.h3`
  color: white;
`;

export const ProfileLocation = styled.h3`
  color: white;
`;

export const SocialDiv = styled.div`
  i {
    margin-top: 20px;
    margin-right: 10px;
    color: white;
    font-size: 1.5rem;
    text-shadow: 2px 2px rgba(50, 50, 50, 0.35);
  }
`;

export const ProfileBioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  @media screen and (max-width: 425px) {
    text-align: center;
  }

  h2 {
    padding-bottom: 5px;
    color: #14a693;
  }

  h3 {
    width: 90%;
  }

  hr {
    width: 90%;
    margin: 20px 0;
    border-color: #f9f9f9;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;

    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
    }
    li {
      display: inline;
      margin-right: 15px;
    }
  }
`;

export const ProfileExperienceAndEducationContainer = styled.div`
  max-width: 80%;
  margin: 12px auto 25px auto;
  display: flex;
  justify-content: space-between;
`;

export const ProfileExperience = styled.div`
  border: 1px solid #ebecf0;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  h2 {
    color: #14a693;
    padding-bottom: 5px;
  }

  p {
    font-size: 1rem;
  }
`;

export const ProfileEducation = styled.div`
  border: 1px solid #ebecf0;
  flex: 1;
  padding: 10px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  h2 {
    color: #14a693;
    padding-bottom: 5px;
  }

  p {
    font-size: 1rem;
  }
`;

export const GithubTitle = styled.h2`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 8px;
  color: #14a693;
`;

export const GithubReposContainer = styled.div`
  width: 80%;
  border: 1px solid #ebecf0;
  margin: 12px auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
  margin-bottom: 40px;
`;

export const RepoDiv = styled.div`
  margin: 10px;

  h2 {
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const RepoButtons = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  margin: 20px 15px 15px 15px;
`;

export const StarsButton = styled.button`
  background-color: #14a693;
  border: none;
  margin-bottom: 3px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

export const WatchersButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  margin-bottom: 3px;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

export const ForksButton = styled.button`
  border-radius: 50px;
  margin-bottom: 3px;
  padding: 5px;
  border: none;
  cursor: pointer;
`;

export const ProfileExperienceMap = styled.div`
  flex: 1;
`;

export const ProfileEducationMap = styled.div`
  flex: 1;
`;

export const NoExperienceContainer = styled.div`
  border: 1px solid #ebecf0;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const NoEducationContainer = styled.div`
  border: 1px solid #ebecf0;
  flex: 1;
  padding: 10px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;
