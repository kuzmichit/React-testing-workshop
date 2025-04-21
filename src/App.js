import styles from './App.module.css';
import { Converter } from './components/Converter';
import { Quote } from './components/Quote';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Converter />
      <Quote />
    </div>
  );
};
