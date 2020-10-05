import styled from "styled-components/macro";

export const BackButtonContainer = styled.div`
  width: 80%;
  margin: 30px auto;

  button {
    background-color: #14a693;
    border: none;
    padding: 15px;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.25);

    &:focus {
      outline: none;
    }
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 12px auto;
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

export const ProfileExperienceContainer = styled.div`
  max-width: 80%;
  margin: 12px auto 25px auto;
  display: flex;
`;

export const ProfileExperience = styled.div`
  border: 1px solid #ebecf0;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  h2 {
    color: #14a693;
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
`;

export const RepoDiv = styled.div`
  margin: 10px;
`;

export const RepoButtons = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  margin: 15px;
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
