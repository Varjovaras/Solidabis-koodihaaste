import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import restaurantService from '../services/restaurants';
import { Data, Dishes, Restaurant } from '../types/restaurant';
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
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [restaurantId, setRestaurantId] = useState<string>('');
  const [dishes, setDishes] = useState<Dishes[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('city')) {
      const cityStorage = sessionStorage.getItem('city'); //mandatory reassigning to avoid type problems with state
      console.log(cityStorage);
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
      console.log(voteStorage);
      console.log(idStorage);
      if (voteStorage) {
        setVoted(true);
        setRestaurantName(voteStorage);
      }
      if (idStorage) {
        setRestaurantId(idStorage);
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
      sessionStorage.setItem('vote', restaurant.name);
      sessionStorage.setItem('id', restaurant.id);
      setVoted(true);
      setRestaurantName(restaurant.name);
      setRestaurantId(restaurant.id);
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
    sessionStorage.removeItem('city');
    console.log('Reset city');
  };

  const handleResetVote = (id: string, name: string) => {
    restaurantService.postVote(id).then(() => {
      setInfoMessage('Your vote deleted for ' + name);
      setVoted(false);
      setRestaurantId('');
      setRestaurantName('');
      sessionStorage.removeItem('vote');
      sessionStorage.removeItem('id');
      setTimeout(() => {
        setInfoMessage(null);
      }, 5000);
    });
  };

  //??????????
  // const handleShowDishes = (dishes: Dishes) => {
  //   if (dishes) {
  //     setDishes(restaurant);
  //   } else {
  //     setInfoMessage(`${restaurant.name} has no dishes`);
  //     setTimeout(() => {
  //       setInfoMessage(null);
  //     }, 5000);
  //   }
  // };

  return (
    <div className={styles.main}>
      <LinkPages />
      <h1>Lounaat</h1>
      <div>
        <SearchField
          handleSubmitCity={handleSubmitCity}
          city={city}
          setCity={setCity}
        />
      </div>

      <p></p>
      <InfoMessage message={infoMessage} />
      <FilterRestaurants
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      {restaurantsInCity.restaurants.length > 0 && (
        <Restaurants
          cityName={cityName}
          filteredRestaurants={filteredRestaurants}
          setInfoMessage={setInfoMessage}
          handleVote={handleVote}
          voted={voted}
          handleShowDishes={handleShowDishes}
          restaurantName={restaurantName}
          restaurantId={restaurantId}
          handleResetVote={handleResetVote}
        />
      )}
      <button onClick={handleResetCity}>reset city</button>
    </div>
  );
};

export default Home;
