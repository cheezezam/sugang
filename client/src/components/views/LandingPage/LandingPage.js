import React from "react";
import ApplyTablePage from "../Table/ApplyTablePage";
import MySubjectTable from "../Table/MySubjectTable";
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const landingPageContainer = css`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 5rem auto;
`;

function LandingPage() {
  return (
    <>
      <div css={landingPageContainer}>
        <MySubjectTable />
        <ApplyTablePage />
      </div>
    </>
  );
}

export default LandingPage;
