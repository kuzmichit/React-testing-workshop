import styles from './CurrentCourse.module.css';
import { useSelector } from 'react-redux';
import { selectorCourse } from '../../store/features/course/slice';

export const CurrentCourse = () => {
  const value = useSelector(selectorCourse);

  return <div className={styles.value}>{value} RUB</div>;
};
