/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const SIZES = {
  small: { "--height": 8 + "px" },
  medium: { "--height": 8 * 2 + "px" },
  large: { "--height": 8 * 3 + "px", "--padding": 4 + "px" },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <>
      {/* <label for="loadinglabel">Loading:</label> */}
      <ProgressBarBase style={styles} id="loadinglabel" max="100" value={value}></ProgressBarBase>
    </>
  );
};
const ProgressBarBase = styled.progress`
  --border-radius: 8px;

  /* border-radius: var(--border-radius), 0, 0, var(--border-radius); */
  padding: var(--padding);
  width: 80%;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  color: red;
  border-radius: 4px 0 4px 0;
  * {
    border-radius: 4px 0 4px 0;
  }
  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }
  &::-moz-progress-bar {
    /* style rules */
  }
`;

export default ProgressBar;
