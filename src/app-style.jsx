import styled from "styled-components";

const AppStyle = styled.div`
  min-height: 100vh;
  border: 1px solid green;
  background: ${(props) => props.mode.background};
  color: ${(props) => props.mode.text};

  .material-symbols-outlined {
    font-variation-settings: "FILL" ${(props) => props.mode.fill}, "wght" 90,
      "GRAD" 80, "opsz" 10;
  }
`;

export default AppStyle;
