import styled from "styled-components";

const ShowArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 6%;
  color: ${(props) => props.mode.text};
  p {
    font-weight: 600;
  }
  span {
    font-weight: 300;
  }
  .flag {
    width: 600px;
    height: 350px;
    background: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .country-info {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .info {
      display: flex;
      align-items: center;
      gap: 4rem;
      p {
        padding-bottom: 0.8rem;
      }

      .main-info {
        h2 {
          padding-bottom: 2rem;
          font-size: 25px;
          font-weight: 800;
        }
      }
    }

    .borders-countries {
      display: flex;
      align-items: center;
      gap: 5px;
      p {
        min-width: 120px;
      }
      .container {
        font-size: 300;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
      }

      .item {
        background: ${(props) => props.mode.elements};
        min-width: 100px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
      }
    }
  }
`;

export default ShowArticle;
