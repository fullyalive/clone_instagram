import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Loading = (props, context) => (
  <div className={styles.container}>
    <img
      src={require("images/loading.png")}
      className={styles.spinner}
      alt={context.t("로딩중")}
    />
  </div>
);

Loading.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Loading;