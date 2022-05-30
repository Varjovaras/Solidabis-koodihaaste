import { Data } from '../types/restaurant';

interface Props {
  restaurantsInCity: Data;
  handleResetCity: () => void;
}
const ResetCity = ({ restaurantsInCity, handleResetCity }: Props) => {
  return (
    <>
      {restaurantsInCity.restaurants.length !== 0 && (
        <button id="reset-button" onClick={handleResetCity}>
          reset city
        </button>
      )}
    </>
  );
};

export default ResetCity;
