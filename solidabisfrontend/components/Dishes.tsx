import { Dish } from '../types/restaurant';

interface Props {
  dishes: Dish[] | undefined;
}
const Dishes = ({ dishes }: Props) => {
  if (dishes && dishes.length !== 0) {
    return (
      <ul>
        <h4>dishes</h4>
        {dishes.map((dish) => (
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
