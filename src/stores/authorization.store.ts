import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";
import { AuthorizationService } from "../services";
import { makeAutoObservable } from "mobx";

class AuthorizationStore {
  public loading = false;
  public signIn: LoginRequest = {
    email: "",
    password: "",
  };
  public signUpInfo: SignupRequest = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    patronymic: "",
  };
  public dubleCheckPass = "";

  private service: AuthorizationService;

  constructor() {
    makeAutoObservable(this);
    this.service = new AuthorizationService();
  }

  public get disabledSignIn() {
    const { email, password } = this.signIn;
    return (email.length === 0 && !email.includes("@")) || password.length < 8;
  }

  public get disabledSignUp() {
    const { email, password, firstName, lastName } = this.signUpInfo;
    return (
      (email.length === 0 && !email.includes("@")) ||
      password.length < 8 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      this.dubleCheckPass !== password
    );
  }

  private setLoading = (state: boolean) => (this.loading = state);

  public setSignIn = (key: keyof LoginRequest, value: string) => {
    this.signIn = { ...this.signIn, [key]: value };
  };

  public setSignUp = (key: keyof SignupRequest, value: string) => {
    this.signUpInfo = { ...this.signUpInfo, [key]: value };
  };

  public setDublePass = (value: string) => {
    this.dubleCheckPass = value;
  };

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = () => {
    try {
      this.setLoading(true);
      console.log(this.service.logIn(this.signIn));
    } catch {
    } finally {
      this.setLoading(false);
    }
  };

  public signUp = () => {
    try {
      this.setLoading(true);
      console.log(this.service.signUp(this.signUpInfo));
    } catch {
    } finally {
      this.setLoading(false);
    }
  };

  // public signUp = async (params: SignupRequest) =>
  //   await axios.post(authorizationUrl.signUp, params);
  // public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}

export const authorizationStore = new AuthorizationStore();
