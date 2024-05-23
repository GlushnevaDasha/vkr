import { ChangeEvent, FC } from "react";
import { Button, Form, FormHeader, Input } from "../atom";
import { authorizationStore } from "../../stores";
import { observer } from "mobx-react-lite";
import { LoginRequest } from "../../models";
import { Link } from "react-router-dom";

export const SignIn: FC = observer(() => {
  const { signIn, setSignIn, disabledSignIn } = authorizationStore;

  const handleChange =
    (key: keyof LoginRequest) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSignIn(key, value);
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
        placeholder='E-mail'
        value={signIn.email}
        onChange={handleChange("email")}
      />
      <Input
        id='pass'
        type='password'
        placeholder='Пароль'
        value={signIn.password}
        onChange={handleChange("password")}
      />
      <Button $variant={"out"} onClick={handleSubmit} disabled={disabledSignIn}>
        Войти
      </Button>
      <div>
        <Link to={"/sign-up"}>Регистрация</Link>
      </div>
    </Form>
  );
});
