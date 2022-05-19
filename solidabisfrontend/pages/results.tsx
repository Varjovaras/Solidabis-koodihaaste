import { useEffect, useState } from 'react';
import { Result } from '../types/restaurant';
import styles from '../styles/Home.module.css';
import LinkPages from '../components/LinkPages';
import restaurantService from '../services/restaurants';

const Results = () => {
  const [resultData, setResultData] = useState<Result>({
    results: [],
  });

  useEffect(() => {
    restaurantService.getResults().then((results) => {
      setResultData(results);
    });
  }, []);

  return (
    <div className={styles.main}>
      <LinkPages />
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
    </div>
  );
};

export default Results;
