import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import Banner from "components/Banner";

const Explore = props => {
  if (props.loading) {
    return <LoadingExplore />;
  } else if (props.userList) {
    return <RenderExplore {...props} />;
  }
};

const LoadingExplore = props => (
  <div className={styles.explore}>
    <Loading />
  </div>
);

const RenderExplore = props => (

  <div className={styles.explore}>
    < Banner />
    {props.userList.map(user => (
      <UserDisplay big={true} horizontal={true} user={user} key={user.id} />
    ))}
  </div>
);

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Explore;
