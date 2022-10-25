import styled from "styled-components";

const DetailsSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .back {
    cursor: pointer;
    width: 90px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0.5rem;
    justify-content: center;
    color: ${(props) => props.mode.text};
    background-color: ${(props) => props.mode.elements};
    font-weight: 300;
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    .material-symbols-outlined {
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 100, "opsz" 5;
    }
  }
`;

export default DetailsSection;
