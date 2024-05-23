import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";
import { AuthorizationService } from "../services";
import { makeAutoObservable } from "mobx";

class AuthorizationStore {
  public loading = false;
  private service: AuthorizationService;

  constructor() {
    makeAutoObservable(this);
    this.service = new AuthorizationService();
  }

  private setLoading = (state: boolean) => (this.loading = state);

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = (params: LoginRequest) => {
    try {
      this.setLoading(true);
      console.log(this.service.logIn(params));
    } catch {
    } finally {
      this.setLoading(false);
    }
  };
  //   await axios.post(authorizationUrl.logIn, params);
  // public signUp = async (params: SignupRequest) =>
  //   await axios.post(authorizationUrl.signUp, params);
  // public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}

export const authorizationStore = new AuthorizationStore();
