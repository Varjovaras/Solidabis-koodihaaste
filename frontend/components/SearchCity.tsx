import styles from '../styles/Button.module.css';
import { Data } from '../types/restaurant';
import ResetCity from './ResetCity';

interface Props {
  handleSubmitCity: (event: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  setCity: (string: string) => void;
  restaurantsInCity: Data;
  handleResetCity: () => void;
}

const SearchCity = ({
  handleSubmitCity,
  city,
  setCity,
  restaurantsInCity,
  handleResetCity,
}: Props) => {
  return (
    <>
      {' '}
      <form onSubmit={handleSubmitCity}>
        search cities{' '}
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{' '}
        <button className={styles.button} id="search-button" type="submit">
          submit
        </button>
        {restaurantsInCity && (
          <ResetCity
            restaurantsInCity={restaurantsInCity}
            handleResetCity={handleResetCity}
          />
        )}
      </form>
    </>
  );
};

export default SearchCity;
