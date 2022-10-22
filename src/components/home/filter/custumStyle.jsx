export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 10,
    color: state.isSelected ? "red" : "inherit",
    cursor: "pointer",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    height: "100%",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
