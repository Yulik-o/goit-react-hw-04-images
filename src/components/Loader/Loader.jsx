import { LineWave } from 'react-loader-spinner';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.loaderStyles}>
      <LineWave
        height="100"
        width="100"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        color="red"
        firstLineColor="blue"
        middleLineColor="green"
        lastLineColor="grey"
      />
    </div>
  );
}
