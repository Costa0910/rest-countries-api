import styled from "styled-components";

const Article = styled.article`
  background: ${(props) => props.mode.elements};
  color: ${(props) => props.mode.text};
  width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  .flag {
    width: 100%;
    height: 45%;
    background: url(${(props) => props.bg});
    -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 2px;
  }

  .details {
    width: 100%;
    padding: 1.7rem;

    h2 {
      width: fit-content;
      font-size: 16px;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: ${(props) => props.mode.text};
    }
    p {
      padding-block: 0.4rem;
      font-weight: 600;
      font-size: 14px;
    }

    span {
      font-weight: 300;
    }

    h2:hover {
      text-decoration: underline;
    }
  }
`;

export default Article;
