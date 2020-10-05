import React from "react";
import { Link } from "react-router-dom";
import { DashButtonsActionsContainer } from "./DashboardActions.styles";

const DashboardActions = () => {
  return (
    <DashButtonsActionsContainer>
      <Link to="/edit-profile">
        <button>
          <i className="fas fa-user-circle"></i> Edit Profile
        </button>
      </Link>

      <Link to="/add-experience">
        <button>
          <i className="fab fa-black-tie"></i> Add Experience
        </button>
      </Link>

      <Link to="/add-education">
        <button>
          <i className="fas fa-graduation-cap"></i> Add Education
        </button>
      </Link>
    </DashButtonsActionsContainer>
  );
};

export default DashboardActions;
