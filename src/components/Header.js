import React from "react";
import styled from "styled-components";
import * as TextStyles from "../TextStyles";

import CourseButton from "./CourseButton";

function Header() {
  return (
    <Wrapper>
      <a
        href="https://www.youtube.com/watch?v=fqDVIu689ow&t=53s"
        target="_blank"
        rel="noreferrer"
      >
        <CourseButton title="Click Me" />
      </a>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 60px;
  top: 56px;
  right: 50px;
  z-index: 2;

  a {
    color: #000000;
    text-decoration: none;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

const Caption = styled(TextStyles.Caption)`
  color: #ffffff;
  text-transform: uppercase;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
  }
`;
