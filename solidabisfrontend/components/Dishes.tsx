import { Dish, Restaurant } from '../types/restaurant';
import VoteButton from './VoteButton';

interface Props {
  restaurant: Restaurant | undefined;
  handleVote: (restaurant: Restaurant) => void;
}
const Dishes = ({ restaurant, handleVote }: Props) => {
  if (restaurant && restaurant.dishes.length !== 0) {
    return (
      <ul>
        <h4>dishes in {restaurant.name}</h4>
        <VoteButton handleVote={handleVote} restaurant={restaurant} />
        {restaurant.dishes.map((dish: Dish) => (
          <li key={dish.name}>
            {dish.name} {dish.price} {dish.attributes}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default Dishes;
