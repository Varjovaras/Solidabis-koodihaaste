import { Data, Restaurant } from '../types/restaurant';
import SingleRestaurant from './SingleRestaurant';

interface Props {
  cityName: string;
  filteredRestaurants: Data;
  setInfoMessage: (message: string | null) => void;
  handleVote: (restaurant: Restaurant) => void;
  voted: boolean;
}

const Restaurants = ({
  filteredRestaurants,
  cityName,
  setInfoMessage,
  handleVote,
  voted,
}: Props) => {
  return (
    <div>
      <ul>
        <h3>{cityName}</h3>
        {filteredRestaurants.restaurants.map((restaurant: Restaurant) => (
          <SingleRestaurant
            restaurant={restaurant}
            key={restaurant.id}
            setInfoMessage={setInfoMessage}
            handleVote={handleVote}
            voted={voted}
          />
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
