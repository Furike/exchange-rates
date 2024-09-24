import "./SearchInput.css";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

const SearchInput = ({ value, setValue }: Props) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
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
