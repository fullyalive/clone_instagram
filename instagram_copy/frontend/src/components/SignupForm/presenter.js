import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {context.t("친구들의 사진과 동영상을 보려면 가입하세요.")}
    </h3>
    <FacebookLogin
      appId="168532063764387"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-official"
      textButton={context.t("Facebook으로 로그인")}
    />
    <span className={formStyles.divider}>{context.t("또는")}</span>
    <form
      className={formStyles.form}
      onSubmit={props.handleSubmit}
      method="post"
    >
      <input
        type="email"
        placeholder={context.t("휴대폰 번호 또는 이메일 주소")}
        className={formStyles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={context.t("성명")}
        className={formStyles.textInput}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        type="username"
        placeholder={context.t("사용자 이름")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t("비밀번호")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value={context.t("가입")}
        className={formStyles.button}
        onChange={props.handleInputChange}
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

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
