import { useSelector, useDispatch } from "react-redux";
import { startTransition, useEffect, useState } from "react";
import {
  searchByName,
  getStartData,
} from "../../../features/countries/countriesSlice";
import Form from "./input-style";

const Input = () => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    startTransition(() => {
      // To void rendering all countries 1 time
      if (query.length) {
        dispatch(searchByName(query.toLocaleLowerCase()));
      } else {
        dispatch(getStartData());
      }
    });
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(query.toLocaleLowerCase()));
    setQuery("");
  }

  return (
    <Form
      onSubmit={handleSubmit}
      mode={witchMode ? { ...darkMode } : { ...lightMode }}
    >
      <label>
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={query}
        />
      </label>
    </Form>
  );
};

export default Input;
