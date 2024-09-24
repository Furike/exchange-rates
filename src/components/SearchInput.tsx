import "./SearchInput.css";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

const SearchInput = ({ value, setValue }: Props) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value.trim();
    setValue(newValue);
    if (newValue) {
      window.location.hash = "search=" + newValue;
    } else {
      window.location.hash = "";
    }
  };
  return (
    <input
      type="text"
      placeholder="Search currency by code"
      className="search"
      aria-label="Search"
      value={value}
      onChange={handleOnChange}
    ></input>
  );
};

export default SearchInput;
