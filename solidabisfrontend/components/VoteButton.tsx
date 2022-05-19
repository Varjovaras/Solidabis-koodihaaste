import { Restaurant } from '../types/restaurant';
import styles from './VoteButton.module.css';

interface Props {
  handleVote: (restaurant: Restaurant) => void;
  restaurant: Restaurant;
}

const VoteButton = ({ handleVote, restaurant }: Props) => {
  return (
    <div>
      <button className={styles.button} onClick={() => handleVote(restaurant)}>
        Vote
      </button>
    </div>
  );
};

export default VoteButton;
