import { Data, Restaurant } from '../types/restaurant';
import SingleRestaurant from './SingleRestaurant';
import styles from './Restaurants.module.css';
import RestaurantVote from './RestaurantVote';
import FilterRestaurants from './FilterRestaurants';

interface Props {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredRestaurants: Data;
  setInfoMessage: (message: string | null) => void;
  handleShowDishes: (restaurant: Restaurant) => void;
  restaurantId: string;
  restaurantName: string;
  handleResetVote: (id: string, name: string) => void;
}

const Restaurants = ({
  filter,
  handleFilterChange,
  filteredRestaurants,
  setInfoMessage,
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
      <FilterRestaurants
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <div className={styles.column}>
        {filteredRestaurants.restaurants.map((restaurant: Restaurant) => (
          <SingleRestaurant
            restaurant={restaurant}
            key={restaurant.id}
            setInfoMessage={setInfoMessage}
            handleShowDishes={handleShowDishes}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
