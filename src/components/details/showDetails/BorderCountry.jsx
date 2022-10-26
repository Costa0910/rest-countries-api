import { startTransition } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addClickedCountry } from "../../../features/countries/countriesSlice";

const BorderCountry = ({ country }) => {
  const dispatch = useDispatch();
  function handleClick() {
    startTransition(() => {
      dispatch(addClickedCountry(country.id));
    });
    console.log(country.id);
  }

  return (
    <Link to={`/country/${country.id}`} className="item" onClick={handleClick}>
      {country.name}
    </Link>
  );
};

export default BorderCountry;
