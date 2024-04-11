import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <div className={styles.account}>
            <img src="/images/ricardo.jpg" alt="Ricardo" className={styles.profilePicture} />
            <div className={styles.name}>Ricardo Cooper</div>
          </div>
          
          <div className={styles.buttons}>
            <button className={styles.button}><img src="/images/message.png" className={styles.icon}/> Message</button>
            <button className={styles.button}><img src="/images/call.png" className={styles.icon}/> Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;