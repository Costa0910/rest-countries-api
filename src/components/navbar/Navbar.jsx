import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../features/theme/themeSlice";
import NavbarStyle from "./navbar-style";
const Navbar = () => {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );
  const dispatch = useDispatch();
  return (
    <NavbarStyle mode={witchMode ? { ...darkMode } : { ...lightMode }}>
      <h1>Where in the World?</h1>
      <div onClick={() => dispatch(changeMode())}>
        <span className="material-symbols-outlined">dark_mode</span>Dark Mode
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
