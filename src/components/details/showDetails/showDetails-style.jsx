import styled from "styled-components";

const ShowArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 6%;
  color: ${(props) => props.mode.text};

  .none-countries-border {
    font-size: 16px;
    width: 100%;
    font-weight: 800;
  }
  p {
    font-weight: 600;
  }
  span {
    font-weight: 300;
  }

  .flag {
    min-width: 500px;
    min-width: 600px;
    height: 350px;
    background: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 2px;
  }

  .country-info {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .info {
      display: flex;
      align-items: center;
      gap: 3rem;
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
        color: inherit;
        min-width: 100px;
        min-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 5px;
        -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
      }

      .item:hover {
        background: transparent;
        text-decoration: underline;
      }
    }
  }

  /* MEDIA QUERY FOR (TABLET) */
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    .country-info {
      margin-top: 1.5rem;
      gap: 1.5rem;
    }
  }

  /* MEDIA QUERY FOR (PHONE) */

  @media screen and (max-width: 640px) {
    width: 100%;
    gap: 0;
    .flag {
      min-width: 100%;
      min-height: 100%;
      height: 200px;
    }
    .info {
      flex-direction: column;
    }

    .main-info {
      width: 100%;
    }

    .more-info {
      width: 100%;
    }

    .borders-countries {
      flex-direction: column;
      p {
        width: 100%;
        margin-bottom: 1.5rem;
      }

      .container {
        width: 100%;
      }
    }
  }
`;

export default ShowArticle;
