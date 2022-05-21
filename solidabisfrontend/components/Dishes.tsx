import { Dish } from '../types/restaurant';

interface Props {
  dishes: Dish[];
}
const Dishes = ({ dishes }: Props) => {
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
};

export default Dishes;
