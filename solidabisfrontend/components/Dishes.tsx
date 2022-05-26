import { Dish, Restaurant } from '../types/restaurant';

interface Props {
  restaurant: Restaurant | undefined;
}
const Dishes = ({ restaurant }: Props) => {
  if (restaurant && restaurant.dishes.length !== 0) {
    return (
      <div>
        <ul>
          {restaurant.dishes.map((dish: Dish) => (
            <li key={dish.name}>
              {dish.name} {dish.price} {dish.attributes}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Dishes;
