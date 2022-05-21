import { Data, Restaurant } from '../types/restaurant';
import SingleRestaurant from './SingleRestaurant';
import styles from './Restaurants.module.css';
import RestaurantVote from './RestaurantVote';

interface Props {
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
      <RestaurantVote
        restaurantId={restaurantId}
        restaurantName={restaurantName}
        handleResetVote={handleResetVote}
      />
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
