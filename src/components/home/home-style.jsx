import styled from "styled-components";

const Main = styled.main`
  padding: 2rem;
  /* allow me to center loader */
  display: flex;
  flex-direction: column;

  /* loader */
  .lds-ellipsis {
    align-self: center;
  }

  @media screen and (max-width: 640px) {
    padding: 2rem 0;
  }
`;

export const Search = styled.div`
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  font-size: 14px;
  font-weight: 600;

  @media screen and (max-width: 640px) {
    padding: 0 1rem;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

export const SectionCountries = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export default Main;
