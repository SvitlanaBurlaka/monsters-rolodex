import "./search-box.style.css";

export const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
