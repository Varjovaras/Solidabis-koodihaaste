import { Restaurant } from '../types/restaurant';
import styles from '../styles/Button.module.css';

interface Props {
  handleVote: (restaurant: Restaurant) => void;
  restaurant: Restaurant;
}

const VoteButton = ({ handleVote, restaurant }: Props) => {
  return (
    <>
      <button className={styles.button} onClick={() => handleVote(restaurant)}>
        Vote
      </button>
    </>
  );
};

export default VoteButton;
