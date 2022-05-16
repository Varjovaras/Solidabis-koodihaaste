import styles from './InfoMessage.module.css';
interface Props {
  message: string | null;
}

const InfoNotification = ({ message }: Props) => {
  if (message === null) {
    return null;
  }

  return <div className={styles.info}>{message}</div>;
};

export default InfoNotification;
