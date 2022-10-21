import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppStyle from "./app-style";
import { useSelector } from "react-redux";

function App() {
  const { witchMode, darkMode, lightMode } = useSelector(
    (state) => state.theme
  );

  return (
    <AppStyle
      mode={witchMode ? { ...darkMode, fill: 1 } : { ...lightMode, fill: 0 }}
    >
      <Navbar />
      <Outlet />
    </AppStyle>
  );
}

export default App;
