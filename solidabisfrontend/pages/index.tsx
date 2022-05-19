import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import restaurantService from '../services/restaurants';
import { Data, Restaurant } from '../types/restaurant';
import InfoMessage from '../components/InfoMessage';
import Restaurants from '../components/Restaurants';
import SearchField from '../components/SearchField';
import FilterRestaurants from '../components/FilterRestaurants';
import LinkPages from '../components/LinkPages';

const Home: NextPage = () => {
  const [city, setCity] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [restaurantsInCity, setRestaurantsInCity] = useState<Data>({
    restaurants: [],
  });
  const [filteredRestaurants, setFilteredRestaurants] = useState<Data>({
    restaurants: [],
  });
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [voted, setVoted] = useState<boolean>(false);
  const [myVote, setMyVote] = useState<Restaurant | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('city')) {
      const storage = sessionStorage.getItem('city'); //mandatory reassigning to avoid type problems with state
      console.log(storage);
      if (storage) {
        setCityName(storage);
        restaurantService.getRestaurants(storage).then((restaurantsInCity) => {
          if (restaurantsInCity.restaurants.length !== 0) {
            setRestaurantsInCity(restaurantsInCity);
            setFilteredRestaurants(restaurantsInCity);
            setCity('');
          }
        });
      }
    }
  }, []);

  const handleSubmitCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInfoMessage(null);

    restaurantService.getRestaurants(city).then((restaurantsInCity) => {
      if (restaurantsInCity.restaurants.length === 0) {
        setInfoMessage(`${city} has no restaurants`);
        console.log(`${city} has no restaurants`);
        setTimeout(() => {
          setInfoMessage(null);
        }, 5000);
      } else {
        sessionStorage.setItem('city', city);
        setRestaurantsInCity(restaurantsInCity);
        setFilteredRestaurants(restaurantsInCity);
        setCityName(city);
        setCity('');
      }
    });
  };

  const handleVote = (restaurant: Restaurant) => {
    restaurantService.postVote(restaurant.id).then(() => {
      setInfoMessage('Thank you for voting for ' + restaurant.name);
      setVoted(true);
      setMyVote(restaurant);
      setTimeout(() => {
        setInfoMessage(null);
      }, 5000);
    });
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(filter);
    setFilter(event.target.value);
    const filtered = restaurantsInCity.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredRestaurants({ restaurants: filtered });
  };

  const handleResetCity = () => {
    setRestaurantsInCity({ restaurants: [] });
    console.log('Reset city');
  };

  const handleResetVote = (restaurant: Restaurant) => {
    restaurantService.postVote(restaurant.id).then(() => {
      setInfoMessage('Your vote deleted for ' + restaurant.name);
      setVoted(false);
      setMyVote(null);
      setTimeout(() => {
        setInfoMessage(null);
      }, 5000);
    });
  };

  return (
    <div className={styles.main}>
      <LinkPages />
      <InfoMessage message={infoMessage} />
      <h1>Lounaat</h1>
      <div>
        <SearchField
          handleSubmitCity={handleSubmitCity}
          city={city}
          setCity={setCity}
        />
        <FilterRestaurants
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <p></p>
      {myVote && (
        <p>
          My vote: {myVote}
          <button onClick={() => handleResetVote(myVote)}>reset vote</button>
        </p>
      )}

      {restaurantsInCity.restaurants.length > 0 && (
        <Restaurants
          cityName={cityName}
          filteredRestaurants={filteredRestaurants}
          setInfoMessage={setInfoMessage}
          handleVote={handleVote}
          voted={voted}
        />
      )}
      <button onClick={handleResetCity}>reset city</button>
    </div>
  );
};

export default Home;
