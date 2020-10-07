import styled from "styled-components";

export const EducationTableDiv = styled.div`
  h2 {
    margin: 30px 0 10px 0;
  }
`;

export const EducationTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .table-header {
    background-color: #14a693;

    th {
      color: white;
    }
  }
`;

export const EducationDeleteButton = styled.button`
  background-color: #14a693;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 50px;
  cursor: pointer;
`;
