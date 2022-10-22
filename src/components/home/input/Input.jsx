import Label from "./input-style";
import { useSelector } from "react-redux";

const Input = () => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );
  return (
    <Label mode={witchMode ? { ...darkMode } : { ...lightMode }}>
      <span className="material-symbols-outlined">search</span>
      <input type="text" placeholder="Search for a country..." />
    </Label>
  );
};

export default Input;
