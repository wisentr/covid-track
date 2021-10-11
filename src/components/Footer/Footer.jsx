import React from "react";
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      Icons made by{" "}
      <a href="https://www.freepik.com" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
}

export default Footer;
