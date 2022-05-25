import { Restaurant } from '../types/restaurant';
import styles from './Button.module.css';

interface Props {
  restaurant: Restaurant;
  handleShowDishes: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({ restaurant, handleShowDishes }: Props) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => handleShowDishes(restaurant)}
      >
        show dishes
      </button>{' '}
      {restaurant.name} {restaurant.openingHours}{' '}
    </div>
  );
};

export default SingleRestaurant;
