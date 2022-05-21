import { Restaurant } from '../types/restaurant';
import styles from './Restaurants.module.css';
import VoteButton from './VoteButton';

interface Props {
  restaurant: Restaurant;
  setInfoMessage: (message: string | null) => void;
  handleVote: (restaurant: Restaurant) => void;
  voted: boolean;
  handleShowDishes: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({
  restaurant,
  handleVote,
  handleShowDishes,
  voted,
}: Props) => {
  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        onClick={() => handleShowDishes(restaurant)}
      >
        show dishes
      </button>
      {!voted && <VoteButton handleVote={handleVote} restaurant={restaurant} />}
      {restaurant.name} {restaurant.openingHours}{' '}
    </div>
  );
};

export default SingleRestaurant;
