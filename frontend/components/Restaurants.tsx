import { Data, Restaurant } from '../types/restaurant';
import SingleRestaurant from './SingleRestaurant';
import RestaurantVote from './RestaurantVote';
import FilterRestaurants from './FilterRestaurants';
import styles from '../styles/Restaurant.module.css';

interface Props {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredRestaurants: Data;
  handleShowDishes: (restaurant: Restaurant) => void;
  restaurantId: string;
  restaurantName: string;
  handleResetVote: (id: string, name: string) => void;
  handleVote: (restaurant: Restaurant) => void;
}

const Restaurants = ({
  filter,
  handleFilterChange,
  filteredRestaurants,
  handleShowDishes,
  restaurantId,
  restaurantName,
  handleResetVote,
  handleVote,
}: Props) => {
  return (
    <div className={styles.restaurantHeader}>
      <RestaurantVote
        restaurantId={restaurantId}
        restaurantName={restaurantName}
        handleResetVote={handleResetVote}
      />
      <FilterRestaurants
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <div className={styles.restaurant}>
        {filteredRestaurants.restaurants.map((restaurant: Restaurant) => (
          <SingleRestaurant
            restaurant={restaurant}
            key={restaurant.id}
            handleShowDishes={handleShowDishes}
            handleVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
