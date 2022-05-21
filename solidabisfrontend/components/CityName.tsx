import styles from '../styles/Home.module.css';

interface Props {
  cityName: string;
}

const CityName = ({ cityName }: Props) => (
  <h3 className={styles.header3}>{cityName}</h3>
);

export default CityName;
