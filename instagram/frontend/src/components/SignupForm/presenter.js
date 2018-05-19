import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {context.t("친구들의 사진과 동영상을 보려면 가입하세요.")}
    </h3>
    <button className={formStyles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      {context.t("Facebook으로 로그인")}
    </button>
    <span className={formStyles.divider}>{context.t("또는")}</span>
    <form className={formStyles.form}>
      <input
        type="email"
        placeholder={context.t("휴대폰 번호 또는 이메일 주소")}
        className={formStyles.textInput}
      />
      <input
        type="text"
        placeholder={context.t("성명")}
        className={formStyles.textInput}
      />
      <input
        type="username"
        placeholder={context.t("사용자 이름")}
        className={formStyles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("비밀번호")}
        className={formStyles.textInput}
      />
      <input
        type="submit"
        placeholder={context.t("가입")}
        className={formStyles.button}
      />
    </form>
    <p className={formStyles.terms}>
      {context.t("가입하면 Instagram의 ")}
      <span>{context.t("약관,")}</span> <span>{context.t("데이터 정책")}</span>
      {context.t(" 및")} <span>{context.t("쿠키 정책")}</span>
      {context.t("에 동의하게 됩니다.")}
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
