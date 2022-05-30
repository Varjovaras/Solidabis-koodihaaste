import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import restaurantService from '../services/restaurants';
import { Data, Restaurant } from '../types/restaurant';
import InfoMessage from '../components/InfoMessage';
import Restaurants from '../components/Restaurants';
import SearchCity from '../components/SearchCity';
import Header from '../components/Header';
import CityName from '../components/CityName';
import styles from '../styles/Restaurant.module.css';

const Home: NextPage = () => {
  const [city, setCity] = useState<string>(''); //city for input
  const [cityName, setCityName] = useState<string>(''); //city for display
  const [restaurantsInCity, setRestaurantsInCity] = useState<Data>({
    restaurants: [],
  });
  const [filteredRestaurants, setFilteredRestaurants] = useState<Data>({
    restaurants: [],
  });
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');

  //the voted restaurant id and name
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [restaurantId, setRestaurantId] = useState<string>('');
  const timer = useRef(null); //useref to reset setTimeout

  useEffect(() => {
    if (sessionStorage.getItem('city')) {
      const cityStorage = sessionStorage.getItem('city'); //mandatory reassigning to avoid type problems with state
      console.log('City found in sessionstorage');
      if (cityStorage) {
        setCityName(cityStorage);
        restaurantService
          .getRestaurants(cityStorage)
          .then((restaurantsInCity) => {
            if (restaurantsInCity.restaurants.length !== 0) {
              setRestaurantsInCity(restaurantsInCity);
              setFilteredRestaurants(restaurantsInCity);
              setCity('');
            }
          });
      }
    }
    if (sessionStorage.getItem('vote')) {
      const voteStorage = sessionStorage.getItem('vote');
      const idStorage = sessionStorage.getItem('id');
      console.log('The voted restaurant found in sessionstorage');
      if (voteStorage) {
        setRestaurantName(voteStorage);
      }
      if (idStorage) {
        setRestaurantId(idStorage);
      }
    }
  }, []);

  const handleSubmitCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    restaurantService.getRestaurants(city).then((restaurantsInCity) => {
      if (restaurantsInCity.restaurants.length === 0) {
        console.log(`${city} has no restaurants`);
        infomessageHandler(`${city} has no restaurants`, 5);
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
      sessionStorage.setItem('vote', restaurant.name);
      sessionStorage.setItem('id', restaurant.id);
      setRestaurantName(restaurant.name);
      setRestaurantId(restaurant.id);
      infomessageHandler(`Your vote added for ${restaurant.name}`, 5);
      restaurantService.getRestaurants(cityName).then((restaurantsInCity) => {
        setRestaurantsInCity(restaurantsInCity);
        setFilteredRestaurants(restaurantsInCity);
        setCity('');
      });
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
    setCity('');
    setCityName('');
    sessionStorage.removeItem('city');
    console.log('Reset city');
  };

  const handleResetVote = (id: string, name: string) => {
    restaurantService.postVote(id).then(() => {
      setRestaurantId('');
      setRestaurantName('');
      sessionStorage.removeItem('vote');
      sessionStorage.removeItem('id');
      infomessageHandler(`Your vote deleted for ${name}`, 5);
      restaurantService.getRestaurants(cityName).then((restaurantsInCity) => {
        if (restaurantsInCity.restaurants.length > 0) {
          setRestaurantsInCity(restaurantsInCity);
          setFilteredRestaurants(restaurantsInCity);
          setCity('');
        }
      });
    });
  };

  const handleShowDishes = (restaurant: Restaurant) => {
    if (restaurant.dishes.length === 0 || restaurant.dishes === undefined) {
      infomessageHandler(`No dishes to show for ${restaurant.name}`, 5);
      console.log(`No dishes to show for ${restaurant.name}`);
    }
  };

  const infomessageHandler = (text: string, length: number) => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    setInfoMessage(text);
    // @ts-ignore
    timer.current = setTimeout(() => {
      setInfoMessage(null);
    }, length * 1000);
  };

  return (
    <div className={styles.main}>
      <Header />
      <InfoMessage message={infoMessage} />
      <SearchCity
        handleSubmitCity={handleSubmitCity}
        city={city}
        setCity={setCity}
        restaurantsInCity={restaurantsInCity}
        handleResetCity={handleResetCity}
      />

      <CityName cityName={cityName} />

      {restaurantsInCity.restaurants.length > 0 && (
        <Restaurants
          filter={filter}
          handleFilterChange={handleFilterChange}
          filteredRestaurants={filteredRestaurants}
          handleShowDishes={handleShowDishes}
          restaurantName={restaurantName}
          restaurantId={restaurantId}
          handleResetVote={handleResetVote}
          handleVote={handleVote}
        />
      )}
    </div>
  );
};

export default Home;
