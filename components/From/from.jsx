import React from "react";
import styles from "./from.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const From = () => {
  return (
    <div>
      <span className={styles.from}>Nereden</span>
      <div className={styles.cityNameWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
        <span>İstanbul - Kadıköy</span>
        <div className={styles.dashed}></div>
      </div>
    </div>
  );
};

export default From;
