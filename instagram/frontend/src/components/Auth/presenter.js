import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from "components/AuthForms";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
    <div className={`${styles.whiteBox} ${styles.formBox}`}>
      <img src={require("images/logo.jpg")} alt="인스타그램" />
      {props.action === "login" && <LoginForm />}
      {props.action === "signup" && <SignupForm />}
    </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            회원이 아니신가요?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              회원가입
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            회원이신가요?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              로그인
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>앱 다운로드</span>
        <div className={styles.appstores}>
          <img src={require("images/ios.png")} alt="앱 스토어에서 다운로드" />
          <img
            src={require("images/android.png")}
            alt="구글플레이에서 다운로드"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;
