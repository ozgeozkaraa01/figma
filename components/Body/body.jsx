import React from "react";
import Estimateddeliverytime from "../EstimatedDeliveryTime/estimateddeliverytime";
import From from "../From/from";
import LogisticsCost from "../LogisticsCost/logisticscost";
import Phone from "../Phone/phone";
import Receiver from "../Receiver/receiver";
import To from "../To/to";
import styles from "./body.module.scss";

const Body = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.mainContainer}>
          <div className={styles.wrapper}>
            <From />
            <To />
          </div>
          <div className={styles.wrapper}>
            <Estimateddeliverytime />
            <LogisticsCost />
          </div>
        </div>
        <div className={styles.subContainer}>
          <div>
            <Receiver name="özge" />
            <Receiver name="oğuzhan" />
          </div>

          <div>
            <Phone phoneNumber="(561) 333 33 33"/>
            <Phone phoneNumber="(561) 222 22 22"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
