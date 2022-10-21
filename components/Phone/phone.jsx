import React from "react";
import styles from "./phone.module.scss";

const Phone = (props) => {
  return (
    <div className={styles.phone}>
      <span className={styles.person}>Telefonu:</span>
      <span className={styles.phoneNumber}>{props.phoneNumber}</span>
    </div>
  );
};

export default Phone;
