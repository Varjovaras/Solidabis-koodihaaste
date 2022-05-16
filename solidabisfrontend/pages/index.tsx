import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import restaurantService from '../services/restaurants';
import { Restaurant, Data } from '../types/restaurant';
import InfoNotification from '../components/InfoMessage';

const Home: NextPage = () => {
  const [city, setCity] = useState<string>('');
  const [restaurants, setRestaurants] = useState<Data>({ restaurants: [] });
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const handleReset = () => {
    setRestaurants({ restaurants: [] });
    console.log('Reset city');
  };

  const handleSubmitCity = (event) => {
    event.preventDefault();
    setInfoMessage(null);

    restaurantService.getAll(city).then((restaurants) => {
      if (restaurants.restaurants.length === 0) {
        setInfoMessage(`${city} has no restaurants`);
        console.log(`${city} has no restaurants`);
        setTimeout(() => {
          setInfoMessage(null);
        }, 5000);
      } else {
        setRestaurants(restaurants);
      }
    });
  };

  return (
    <div className={styles.main}>
      <InfoNotification message={infoMessage} />

      <h1>Lounaat</h1>
      <div>
        <form onSubmit={handleSubmitCity}>
          <input
            type="text"
            id="fname"
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <ul>
        {restaurants.restaurants.map((restaurant: Restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
        <button onClick={handleReset}>reset data</button>
      </ul>
    </div>
  );
};

export default Home;
