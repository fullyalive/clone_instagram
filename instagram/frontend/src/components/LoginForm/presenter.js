import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}>
      <input
        type="text"
        placeholder={context.t("전화번호, 사용자 이름 또는 이메일")}
        className={formStyles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("비밀번호")}
        className={formStyles.textInput}
      />
      <input
        type="submit"
        value={context.t("로그인")}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>{context.t("또는")}</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      {context.t("Facebook으로 로그인")}
    </span>
    <span className={formStyles.forgotLink}>
      {context.t("비밀번호를 잊으셨나요?")}
    </span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
