import React from 'react';
import LightToggleIcon from '../../img/lightToggleIcon.svg';
import DarkToggleIcon from '../../img/DarkToggleIcon.svg';
import styles from '../NavBar/styles.module.css';
import clsx from 'clsx';

function ToggleDark(props) {
  return (
      <a href="#" className={styles.imgLink} onClick={() => {
        props.toggleDark();
      }}
      >
        <LightToggleIcon id="lightToggleIcon" className={clsx(styles.headerSvg, 'headerSvg')} />
        <DarkToggleIcon id="darkToggleIcon" className={clsx(styles.headerSvg, 'headerSvg')} display="none" /></a>
  );
}

export default ToggleDark;