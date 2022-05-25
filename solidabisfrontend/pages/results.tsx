import { useEffect, useState } from 'react';
import { Result } from '../types/restaurant';
import LinkPages from '../components/LinkPages';
import restaurantService from '../services/restaurants';

const Results = () => {
  const [resultData, setResultData] = useState<Result>({
    results: [],
  });

  //yyyy-mm-dd
  const [date, setDate] = useState<Date>(new Date());
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
    console.log(date);
    try {
      restaurantService
        .getDayResults(date.toJSON().slice(0, 10).replace(/-/g, '-'))
        .then((results) => {
          setResultData(results);
        });
    } catch (error) {
      console.log('error :D');
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
      restaurantService
        .getDayResults(date.toJSON().slice(0, 10).replace(/-/g, '-'))
        .then((results) => {
          setResultData(results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LinkPages />
      <h3>Results for {date.toJSON().slice(0, 10).replace(/-/g, '/')}</h3>
      <button onClick={() => handleDayChange(-1)}>previous day</button>{' '}
      <button onClick={() => handleDayChange(1)}>next day</button>
      <ul>
        {resultData.results.length !== 0 ? (
          resultData.results.map((result) => (
            <li key={result.restaurantid}>
              {result.name} {result.votes}
            </li>
          ))
        ) : (
          <div>No votes given today</div>
        )}
      </ul>
      <form onSubmit={handleDateChange}>
        <input value={dateInput} onChange={handleDateInput} />
        <button type="submit">submit</button>
      </form>
      <p>enter date yyyy-mm-dd</p>
    </div>
  );
};

export default Results;
