import { Dish, Restaurant } from '../types/restaurant';

interface Props {
  restaurant: Restaurant | undefined;
}
const Dishes = ({ restaurant }: Props) => {
  if (restaurant && restaurant.dishes.length !== 0) {
    return (
      <>
        <ul>
          {restaurant.dishes.map((dish: Dish) => (
            <li id="dish" key={dish.name}>
              {dish.name} {dish.price} {dish.attributes}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default Dishes;
