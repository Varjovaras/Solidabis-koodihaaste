import { Restaurant } from '../types/restaurant';
import styles from './Restaurants.module.css';

interface Props {
  restaurant: Restaurant;
  setInfoMessage: (message: string | null) => void;
  handleShowDishes: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({ restaurant, handleShowDishes }: Props) => {
  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        onClick={() => handleShowDishes(restaurant)}
      >
        show dishes
      </button>
      {restaurant.name} {restaurant.openingHours}{' '}
    </div>
  );
};

export default SingleRestaurant;
