import { Restaurant } from '../types/restaurant';

interface Props {
  restaurant: Restaurant;
  handleShowDishes: (restaurant: Restaurant) => void;
}

const SingleRestaurant = ({ restaurant, handleShowDishes }: Props) => {
  return (
    <div>
      <button onClick={() => handleShowDishes(restaurant)}>show dishes</button>{' '}
      {restaurant.name} {restaurant.openingHours}{' '}
    </div>
  );
};

export default SingleRestaurant;
