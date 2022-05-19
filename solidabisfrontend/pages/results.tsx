import { useEffect, useState } from 'react';
import { Result } from '../types/restaurant';
import styles from '../styles/Home.module.css';
import LinkPages from '../components/LinkPages';
import restaurantService from '../services/restaurants';

const Results = () => {
  const [results, setResults] = useState<Result>([]);

  useEffect(() => {
    restaurantService.getResults().then((results) => {
      setResults(results);
    });
  }, []);

  return (
    <div className={styles.main}>
      <LinkPages />
      <ul>
        {/* <button onClick={handleButton}>1234</button> */}
        {results.results.map((result) => (
          <li key={result.restaurantid}>
            {result.name} {result.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
