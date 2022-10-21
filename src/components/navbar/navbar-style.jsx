import styled from "styled-components";

const NavbarStyle = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  -webkit-box-shadow: 30px 1px 36px -1px rgba(0, 0, 0, 0.17);
  box-shadow: 30px 1px 36px -1px rgba(0, 0, 0, 0.17);

  h1 {
    font-size: 16px;
    font-weight: 800;
    color: inherit;
  }
  div {
    font-size: 14px;
    color: inherit;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
  }
`;

export default NavbarStyle;
