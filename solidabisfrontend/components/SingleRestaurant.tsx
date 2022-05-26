import { Restaurant } from '../types/restaurant';
import styles from '../styles/Button.module.css';
import restaurantStyles from '../styles/Home.module.css';

interface Props {
  restaurant: Restaurant;
  handleShowDishes: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({ restaurant, handleShowDishes }: Props) => {
  return (
    <div className={restaurantStyles.SingleRestaurant}>
      <p>
        {restaurant.name} {restaurant.openingHours}
      </p>
      <button
        className={styles.button}
        onClick={() => handleShowDishes(restaurant)}
      >
        show dishes
      </button>
    </div>
  );
};

export default SingleRestaurant;
