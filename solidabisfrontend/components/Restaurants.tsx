import { Data, Restaurant } from '../types/restaurant';
import SingleRestaurant from './SingleRestaurant';
import styles from './Restaurants.module.css';

interface Props {
  cityName: string;
  filteredRestaurants: Data;
  setInfoMessage: (message: string | null) => void;
  handleVote: (restaurant: Restaurant) => void;
  voted: boolean;
  handleShowDishes: (restaurant: Restaurant) => void;
  restaurantId: string;
  restaurantName: string;
  handleResetVote: (id: string, name: string) => void;
}

const Restaurants = ({
  filteredRestaurants,
  cityName,
  setInfoMessage,
  handleVote,
  voted,
  handleShowDishes,
  restaurantId,
  restaurantName,
  handleResetVote,
}: Props) => {
  return (
    <div>
      <h3 className={styles.header3}>{cityName}</h3>
      {restaurantId && (
        <div>
          My vote: {restaurantName}
          <button onClick={() => handleResetVote(restaurantId, restaurantName)}>
            reset vote
          </button>
        </div>
      )}
      <div className={styles.column}>
        {filteredRestaurants.restaurants.map((restaurant: Restaurant) => (
          <SingleRestaurant
            restaurant={restaurant}
            key={restaurant.id}
            setInfoMessage={setInfoMessage}
            handleVote={handleVote}
            voted={voted}
            handleShowDishes={handleShowDishes}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
