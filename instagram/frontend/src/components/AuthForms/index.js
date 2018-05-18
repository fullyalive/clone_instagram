import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = props => (
  <div>
    <form>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="로그인" />
    </form>
    <span>또는</span>
    <span>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Facebook으로 로그인
    </span>
    <span>비밀번호를 잊으셨나요?</span>
  </div>
);

export const SignupForm = props => (
  <div>
    <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
    <button>
      {" "}
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Facebook으로 로그인
    </button>
    <span>또는</span>
    <form>
      <input type="email" placeholder="이메일" />
      <input type="text" placeholder="성명" />
      <input type="username" placeholder="사용자 이름" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" placeholder="가입" />
    </form>
    <p>
      가입하면 Instagram의 <span>약관,</span> <span>데이터 정책</span> 및{" "}
      <span>쿠키 정책</span>에 동의하게 됩니다.
    </p>
  </div>
);
