import React from "react";
import { NotFoundContainer } from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>
        <i className="fas fa-exclamation-triangle"></i> Page Not Found
      </h1>
      <h3>Sorry this page does not exist</h3>
    </NotFoundContainer>
  );
};

export default NotFound;
