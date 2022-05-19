interface Props {
  handleSubmitCity: (event: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  setCity: (string: string) => void;
}

const SearchField = ({ handleSubmitCity, city, setCity }: Props) => {
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmitCity}>
        <input
          type="text"
          id="fname"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SearchField;
