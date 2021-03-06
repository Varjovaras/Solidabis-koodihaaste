import { useEffect, useState } from 'react';
import { Result } from '../types/types';
import Header from '../components/Header';
import restaurantService from '../services/restaurants';

const Results = () => {
  const [resultData, setResultData] = useState<Result>({
    results: [],
  });
  const [date, setDate] = useState<Date>(new Date()); //yyyy-mm-dd
  const [dateInput, setDateInput] = useState<string>('');

  useEffect(() => {
    restaurantService.getResults().then((results) => {
      setResultData(results);
    });
  }, []);

  const handleDayChange = async (num: number) => {
    const newDay = date;
    newDay.setDate(newDay.getDate() + num);
    setDate(newDay);
    try {
      restaurantService
        .getDayResults(date.toJSON().slice(0, 10).replace(/-/g, '-'))
        .then((results) => {
          setResultData(results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(dateInput);
    setDateInput(event.target.value);
  };

  const handleDateChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const year = parseInt(dateInput.slice(0, 4));
    const month = parseInt(dateInput.slice(5, 7)) - 1;
    const day = parseInt(dateInput.slice(8, 10)) + 1;
    const newDate = new Date(year, month, day);
    console.log(newDate);
    setDate(newDate);
    try {
      restaurantService.getDayResults(dateHelper(newDate)).then((results) => {
        setResultData(results);
        console.log('Day change successful');
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dateHelper = (date: Date): string => {
    return date.toJSON().slice(0, 10).replace(/-/g, '/');
  };

  return (
    <div>
      <Header />
      <h3>Results for {dateHelper(date)}</h3>
      <button id="previous-day-button" onClick={() => handleDayChange(-1)}>
        previous day
      </button>{' '}
      <button id="next-day-button" onClick={() => handleDayChange(1)}>
        next day
      </button>
      <ul>
        {resultData.results.length !== 0 ? (
          resultData.results.map((restaurant) => (
            <li key={restaurant.restaurantid}>
              {restaurant.name} {restaurant.votes} votes
            </li>
          ))
        ) : (
          <div>No votes given today</div>
        )}
      </ul>
      <form onSubmit={handleDateChange}>
        <input id="date-input" value={dateInput} onChange={handleDateInput} />
        <button id="submit-date-button" type="submit">
          submit
        </button>
      </form>
      <p>enter date yyyy-mm-dd</p>
    </div>
  );
};

export default Results;
