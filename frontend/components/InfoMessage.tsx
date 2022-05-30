import styles from '../styles/Restaurant.module.css';
interface Props {
  message: string | null;
}

const InfoMessage = ({ message }: Props) => {
  if (message === null) {
    return null;
  }

  return <div className={styles.info}>{message}</div>;
};

export default InfoMessage;
