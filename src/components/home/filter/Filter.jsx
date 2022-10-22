import { useSelector } from "react-redux";
import SelectStyle from "./filter-style";
import Select from "react-select";
import { options } from "./data";
import { customStyles } from "./custumStyle";

const Filter = () => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );

  function handleChange(e) {
    console.log(e.value);
  }
  return (
    <SelectStyle mode={witchMode ? { ...darkMode } : { ...lightMode }}>
      {/* react-select library */}
      <Select
        classNamePrefix="select"
        onChange={handleChange}
        isSearchable={true}
        options={options}
        styles={customStyles}
        placeholder={`Filter by Region`}
        theme={(theme) => ({
          ...theme,
          borderRadius: 3,
          colors: {
            neutral0: witchMode ? darkMode.background : lightMode.background,
          },
        })}
      />
    </SelectStyle>
  );
};

export default Filter;
