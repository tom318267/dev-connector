import styled from "styled-components";

export const EducationTableDiv = styled.div`
  h2 {
    margin: 30px 0 10px 0;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

export const EducationTable = styled.table`
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;

    @media screen and (max-width: 425px) {
      font-size: 0.5rem;
    }
  }

  .table-header {
    background-color: #14a693;

    th {
      color: white;
      text-align: center;
    }
  }
`;

export const EducationDeleteButton = styled.button`
  background-color: #cc3300;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 50px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    font-size: 0.3rem;
    padding: 5px;
  }
`;
