import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // GET
  // /v2/calendar/{year}/{month}
  // Получает информацию о событиях в месяце

  // GET
  // /v2/calendar/{year}/{month}/{day}
  // Получает информацию о событиях за день

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
