import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ShowDetails from "./showDetails/ShowDetails";
import DetailsSection from "./details-style";

function findCountry(id, all) {
  const country = all.find((country) => country.id === id);
  return country.name;
}

const Details = () => {
  const navigate = useNavigate();
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

  function handleClick() {
    navigate(-1);
  }

  return (
    <DetailsSection mode={witchMode ? { ...darkMode } : { ...lightMode }}>
      <div className="back" onClick={handleClick}>
        <span className="material-symbols-outlined">keyboard_backspace</span>
        Back
      </div>
      <ShowDetails country={selectedCountry} />
    </DetailsSection>
  );
};

export default Details;
