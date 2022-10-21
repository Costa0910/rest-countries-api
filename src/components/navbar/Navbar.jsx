import NavbarStyle from "./navbar-style";
const Navbar = () => {
  return (
    <NavbarStyle>
      <h1>Where in the World?</h1>
      <div>
        <span className="material-symbols-outlined">dark_mode</span>Dark Mode
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
