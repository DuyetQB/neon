import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaValidateSignUp } from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import Input from "components/Form/InputField";
import InputPassWord from "components/Form/PasswordField";
import { Heading2 } from "components/common/Text";
import Button from "components/Button";
import AppLayout from "components/AppLayout";

import IconFb from "images/logo-facebook.png";
import IconGg from "images/logo-google.png";
import ImageFloat from "images/image-sign-up.png";
import IconArrowDown from "images/icon-arrow-down.png";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const { t, i18n } = useTranslation("common");
  const [textLanguage, setTextLanguage] = useState(i18n.language);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidateSignUp),
  });
  const onSubmit = (data) => console.log("data", data);

  const handleShowPopOver = () => {
    setIsShow(!isShow);
  };

  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (i18n.language === "ko") {
      setTextLanguage("Korean");
    }
    if (i18n.language === "vi") {
      setTextLanguage("Vietnamese");
    }
    if (i18n.language === "en") {
      setTextLanguage("English");
    }
  }, [i18n.language]);
  return (
    <>
      <AppLayout>
        <S.Background>
          <div className="row">
            <div className="col-md-5 d-none d-md-block">
              <S.WrapperFloat>
                <div style={{ height: "100vh" }}></div>
                <S.ImgFloat src={ImageFloat} alt="" />
              </S.WrapperFloat>
            </div>
            <div className="col-md-7">
              <S.Wrapper>
                <div className="row">
                  <div className="col-md-10">
                    <S.BoxSelect>
                      <S.BoxPointer>
                        <span onClick={handleShowPopOver}>
                          <b>{textLanguage}</b> ({i18n.language})
                          <img
                            src={IconArrowDown}
                            alt="icon arrow down"
                            style={{ marginLeft: "10px" }}
                          />
                        </span>
                      </S.BoxPointer>
                    </S.BoxSelect>

                    {isShow && (
                      <S.BoxSelectFloat>
                        <Button
                          onClick={() => handleLanguage("vi")}
                          isBlue
                          isHover
                          padding="10px 20px"
                          margin="10px "
                          minWidth="129px"
                        >
                          Vietnamese
                        </Button>
                        <Button
                          onClick={() => handleLanguage("en")}
                          isBlue
                          isHover
                          padding="10px 20px"
                          margin="10px "
                          minWidth="129px"
                        >
                          English
                        </Button>
                        <Button
                          onClick={() => handleLanguage("ko")}
                          isBlue
                          isHover
                          padding="10px 20px"
                          margin="10px"
                          minWidth="129px"
                        >
                          Korean
                        </Button>
                      </S.BoxSelectFloat>
                    )}

                    <Heading2
                      padding="20px 0px 20px 0px"
                      margin="10px 0px"
                      size="40px"
                    >
                      {t("welcome.sign_up")}{" "}
                    </Heading2>
                    <div className="row">
                      <div className="col-md-6">
                        <Button $icon={IconGg} isBorder mt="10px">
                          {t("welcome.sign_up_with")} Google
                        </Button>
                      </div>
                      <div className="col-md-6">
                        <Button $icon={IconFb} isBorder mt="10px">
                          {t("welcome.sign_up_with")} Facebook
                        </Button>
                      </div>
                    </div>
                    <S.BoxCenter>
                      <span>
                        {"-"} {t("welcome.or")} {"-"}
                      </span>
                    </S.BoxCenter>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group pt-3">
                        <Input
                          type="text"
                          placeholder={t("welcome.placeholder_name")}
                          name="name"
                          register={register}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                      </div>
                      <div className="form-group pt-3">
                        <Input
                          type="email"
                          placeholder={t("welcome.placeholder_email")}
                          name="email"
                          register={register}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <div className="form-group pt-3">
                        <InputPassWord
                          placeholder={t("welcome.placeholder_password")}
                          name="password"
                          register={register}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>
                      <div className="form-group pt-5 ">
                        <Button type="submit" isHover isBlue textCenter>
                          {t("welcome.sign_up")}
                        </Button>
                      </div>
                    </form>
                    <div className="form-group pt-3">
                      <span className="account-text ms-2 me-2">
                        {t("welcome.already_account")}
                      </span>

                      <Link to="/login"> {t("welcome.sign_in")} </Link>
                    </div>
                  </div>
                </div>
              </S.Wrapper>
            </div>
          </div>
        </S.Background>
      </AppLayout>
    </>
  );
};
export default Register;
