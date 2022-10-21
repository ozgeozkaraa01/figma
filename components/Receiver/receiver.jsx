import React from "react";
import styles from "./receiver.module.scss";

const Receiver = (props) => {
  return (
    <div className={styles.receiver}>
      <span className={styles.person}>Teslim Alacak Kişi:</span>
      <span className={styles.name}>{props.name}</span>
    </div>
  );
};

export default Receiver;
