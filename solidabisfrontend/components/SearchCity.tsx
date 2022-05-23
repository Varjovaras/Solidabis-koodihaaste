interface Props {
  handleSubmitCity: (event: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  setCity: (string: string) => void;
}

const SearchCity = ({ handleSubmitCity, city, setCity }: Props) => {
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmitCity}>
        search cities
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

export default SearchCity;
