import React from "react";
import styles from "./estimateddeliverytime.module.scss";

const Estimateddeliverytime = () => {
  return (
    <div className={styles.estimation}>
      <span className={styles.time}>Tahmini teslim süresi:</span>
      <span className={styles.day}>2 iş günü</span>
    </div>
  );
};

export default Estimateddeliverytime;
