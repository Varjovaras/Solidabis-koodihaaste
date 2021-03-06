import { useState } from 'react';
import { Restaurant } from '../types/restaurant';
import buttonStyles from '../styles/Button.module.css';
import restaurantStyles from '../styles/Restaurant.module.css';
import Dishes from './Dishes';
import VoteButton from './VoteButton';

interface Props {
  restaurant: Restaurant;
  handleShowDishes: (restaurant: Restaurant) => void;
  handleVote: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({
  restaurant,
  handleShowDishes,
  handleVote,
}: Props) => {
  const [dishes, setDishes] = useState<boolean>(false);

  const showDishButton = (text: string) => {
    return (
      <button
        className={buttonStyles.button}
        onClick={() => {
          handleShowDishes(restaurant);
          setDishes(!dishes);
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <div id="restaurant" className={restaurantStyles.singleRestaurant}>
      <VoteButton handleVote={handleVote} restaurant={restaurant} />
      {dishes ? showDishButton('hide dishes') : showDishButton('show dishes')}
      <p>
        {restaurant.name} {restaurant.openingHours}{' '}
      </p>
      {dishes && <Dishes restaurant={restaurant} />}

      <p id="votes">{restaurant.votes} votes</p>
    </div>
  );
};

export default SingleRestaurant;
