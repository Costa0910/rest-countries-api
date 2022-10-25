import styled from "styled-components";

const Form = styled.form`
    width: 40%;
    height: 100%;
  label {
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: ${(props) => props.mode.input};
    background: ${(props) => props.mode.elements};
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    border-radius: 3px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      width: 15%;
      height: 100%;
      align-items: center;
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 24;
      }
    }

    input {
      width: 85%;
      height: 100%;
      text-indent: 2px;
    }
  }
`;

export default Form;
