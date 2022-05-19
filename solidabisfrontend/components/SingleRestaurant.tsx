import { Restaurant } from '../types/restaurant';

interface Props {
  restaurant: Restaurant;
  setInfoMessage: (message: string | null) => void;
  handleVote: (restaurant: Restaurant) => void;
  voted: boolean;
  // setVoted: (voted: boolean) => void;
}

const SingleRestaurant = ({ restaurant, handleVote, voted }: Props) => {
  return (
    <li>
      {' '}
      {restaurant.name} {restaurant.openingHours}{' '}
      {!voted && <button onClick={() => handleVote(restaurant)}>Vote</button>}
    </li>
  );
};

export default SingleRestaurant;
