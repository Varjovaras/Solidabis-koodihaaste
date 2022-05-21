import { Data } from '../types/restaurant';

interface Props {
  restaurantsInCity: Data;
  handleResetCity: () => void;
}
const ResetCity = ({ restaurantsInCity, handleResetCity }: Props) => {
  return (
    <p>
      {restaurantsInCity.restaurants.length !== 0 && (
        <button onClick={handleResetCity}>reset city</button>
      )}
    </p>
  );
};

export default ResetCity;
