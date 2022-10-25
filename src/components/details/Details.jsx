import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ShowDetails from "./showDetails/ShowDetails";
import DetailsSection from "./details-style";

function findCountry(id, all) {
  const country = all.find((country) => country.id === id);
  return country.name;
}

const Details = () => {
  const { allCountries, countriesToDisplay } = useSelector(
    (state) => state.countriesData
  );
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );
  const { countryId } = useParams();

  let selectedCountry = countriesToDisplay.find(
    (country) => country.id === countryId
  );

  if (selectedCountry) {
    // Some countries don't have border with no another
    const allCountriesAround = selectedCountry.borders?.map((id) =>
      findCountry(id, allCountries)
    );
    selectedCountry = { ...selectedCountry, borders: allCountriesAround };
  } else {
    return <h1>Nothing found, try another country</h1>;
  }

  return (
    <DetailsSection mode={witchMode ? { ...darkMode } : { ...lightMode }}>
      <Link to="/" className="back">
        <span className="material-symbols-outlined">keyboard_backspace</span>
        Back
      </Link>
      <ShowDetails country={selectedCountry} />
    </DetailsSection>
  );
};

export default Details;
