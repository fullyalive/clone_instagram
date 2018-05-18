import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder="아이디" className={styles.textInput} />
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.textInput}
      />
      <input type="submit" value="로그인" className={styles.button} />
    </form>
    <span className={styles.divider}>또는</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Facebook으로 로그인
    </span>
    <span className={styles.forgotLink}>비밀번호를 잊으셨나요?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      친구들의 사진과 동영상을 보려면 가입하세요.
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Facebook으로 로그인
    </button>
    <span className={styles.divider}>또는</span>
    <form className={styles.form}>
      <input type="email" placeholder="이메일" className={styles.textInput} />
      <input type="text" placeholder="성명" className={styles.textInput} />
      <input
        type="username"
        placeholder="사용자 이름"
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.textInput}
      />
      <input type="submit" placeholder="가입" className={styles.button} />
    </form>
    <p className={styles.terms}>
      가입하면 Instagram의 <span>약관,</span> <span>데이터 정책</span> 및{" "}
      <span>쿠키 정책</span>에 동의하게 됩니다.
    </p>
  </div>
);
