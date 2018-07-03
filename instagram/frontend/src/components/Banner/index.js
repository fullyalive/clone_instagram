import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Banner = (props, context) => (
  <div className={styles.container}>
    컨텐츠 배너
  </div>
);

Banner.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Banner;
