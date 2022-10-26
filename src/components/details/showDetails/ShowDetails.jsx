import { useSelector } from "react-redux";
import ShowArticle from "./showDetails-style";
import BorderCountry from "./BorderCountry";
const ShowDetails = ({ country }) => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );

  return (
    <ShowArticle
      bg={country.flag}
      mode={witchMode ? { ...darkMode } : { ...lightMode }}
    >
      <div className="flag"></div>
      <div className="country-info">
        <div className="info">
          <div className="main-info">
            <h2>{country.name}</h2>
            <p>
              Native Name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subRegion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
          <div className="more-info">
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{country.currencies}</span>
            </p>
            <p>
              Languages:{" "}
              <span>
                {country.languages.length > 1
                  ? country.languages.join(", ")
                  : country.languages}
              </span>
            </p>
          </div>
        </div>
        <div className="borders-countries">
          <p>Borders Countries:</p>
          {country.borders ? (
            <span className="container">
              {country.borders.map((countryInBorder, i) => (
                <BorderCountry country={countryInBorder} key={i} />
              ))}
            </span>
          ) : (
            <span className="none-countries-border">none</span>
          )}
        </div>
      </div>
    </ShowArticle>
  );
};

export default ShowDetails;
