import styles from './App.module.css';
import { Converter } from './components/Converter';
import { Quote } from './components/Quote';

export const App = () => {
  return (
    <div className={styles.main}>
      {/*Header*/}
      <Converter />
      <Quote />
    </div>
  );
};
