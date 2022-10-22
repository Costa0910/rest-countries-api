import styled from "styled-components";

const SelectStyle = styled.div`
  width: 200px;
  height: 100%;
  cursor: pointer;
  background: ${(props) => props.mode.elements};
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

export default SelectStyle;
