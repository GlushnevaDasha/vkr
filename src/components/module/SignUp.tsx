import { ChangeEvent, FC } from "react";
import { Button, Form, FormHeader, Input } from "../atom";
import { authorizationStore } from "../../stores";
import { SignupRequest } from "../../models";
import { observer } from "mobx-react-lite";

export const SignUp: FC = observer(() => {
  const {
    signUpInfo,
    setSignUp,
    disabledSignUp,
    dubleCheckPass,
    setDublePass,
  } = authorizationStore;

  const handleChange =
    (key: keyof SignupRequest) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSignUp(key, value);
    };

  const handleChangeDublePass = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setDublePass(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    authorizationStore.logIn();

    // if (this.state.email.length !== 0 && this.state.password.length !== 0) {
    //   const data = await login({
    //     email: this.state.email,
    //     password: this.state.password
    //   });
    //   if (data.error) {
    //     alert(
    //       `Ошибка: ${data.code} - ${data.message.header} \n Как исправить: ${data.message.body}`
    //     );
    //   } else {
    //     cookie.load("token").profile.role === "ADMIN"
    //       ? (document.location.href = "/feed/social_network?page=1")
    //       : (document.location.href = "/shop?page=1");
    //   }
    // } else {
    //   this.setState({
    //     email: this.state.email,
    //     password: this.state.password
    //   });
    //   alert("Вы не ввели данные для авторизации в системе.");
    // }
  };

  return (
    <Form>
      <FormHeader>Система стажировки</FormHeader>
      <Input
        id='email'
        type='email'
        placeholder={"email"}
        value={signUpInfo.email}
        onChange={handleChange("email")}
      />

      <Input
        type='text'
        placeholder='Фамилия'
        value={signUpInfo.firstName}
        onChange={handleChange("firstName")}
      />

      <Input
        type='text'
        placeholder='Имя'
        value={signUpInfo.lastName}
        onChange={handleChange("lastName")}
      />

      <Input
        type='text'
        placeholder='Отчество'
        value={signUpInfo.patronymic ?? ""}
        onChange={handleChange("patronymic")}
      />

      <Input
        id='pass'
        type='password'
        placeholder='Пароль'
        value={signUpInfo.password}
        onChange={handleChange("password")}
      />

      <Input
        type='password'
        placeholder='Повторите пароль'
        value={dubleCheckPass}
        onChange={handleChangeDublePass}
      />

      <Button $variant={"out"} onClick={handleSubmit} disabled={disabledSignUp}>
        Зарегистрироваться
      </Button>
    </Form>
  );
});
