import React from "react";
import styles from "./to.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const To = () => {
  return (
    <div>
      <span className={styles.from}>Nereye</span>
      <div className={styles.cityNameWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
        <span>İzmir - İkinciyeni Şube</span>
      </div>
    </div>
  );
};

export default To;
