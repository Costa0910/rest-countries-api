import { Link } from "react-router-dom";
import Article from "./country-style";
import { useSelector } from "react-redux";
const Country = ({ country }) => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );
  return (
    <Article
      mode={witchMode ? { ...darkMode } : { ...lightMode }}
      bg={country.flag}
    >
      <div className="flag">
        {/* <img src={country.flag} alt={`${country.name} flag`} /> */}
      </div>
      <div className="details">
        <Link to={`country/${country.id}`}>
          <h2>{country.name}</h2>
        </Link>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </Article>
  );
};

export default Country;
