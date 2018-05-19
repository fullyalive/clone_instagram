import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input
        type="text"
        placeholder={context.t("아이디")}
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("비밀번호")}
        className={styles.textInput}
      />
      <input
        type="submit"
        value={context.t("로그인")}
        className={styles.button}
      />
    </form>
    <span className={styles.divider}>{context.t("또는")}</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Facebook으로 로그인")}
    </span>
    <span className={styles.forgotLink}>
      {context.t("비밀번호를 잊으셨나요?")}
    </span>
  </div>
);

export const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      {context.t("친구들의 사진과 동영상을 보려면 가입하세요.")}
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      {context.t("Facebook으로 로그인")}
    </button>
    <span className={styles.divider}>{context.t("또는")}</span>
    <form className={styles.form}>
      <input
        type="email"
        placeholder={context.t("이메일")}
        className={styles.textInput}
      />
      <input
        type="text"
        placeholder={context.t("성명")}
        className={styles.textInput}
      />
      <input
        type="username"
        placeholder={context.t("사용자 이름")}
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("비밀번호")}
        className={styles.textInput}
      />
      <input
        type="submit"
        placeholder={context.t("가입")}
        className={styles.button}
      />
    </form>
    <p className={styles.terms}>
      {context.t("가입하면 Instagram의 ")}
      <span>{context.t("약관,")}</span> <span>{context.t("데이터 정책")}</span>
      {context.t(" 및")} <span>{context.t("쿠키 정책")}</span>
      {context.t("에 동의하게 됩니다.")}
    </p>
  </div>
);
