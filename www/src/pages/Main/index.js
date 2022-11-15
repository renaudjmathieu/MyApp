import clsx from 'clsx';
import styles from './styles.module.css';
import {ReactComponent as ElephantSvg} from '../../elephant.svg';

function Main() {
  return (
    <div className="App">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div class="container">
          <h1 class="hero__title">Renaud Mathieu</h1>
          <ElephantSvg className={styles.heroSvg} role="img" />
        </div>
      </header>
    </div>
  );
}

export default Main;
