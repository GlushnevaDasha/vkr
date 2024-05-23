import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // Методы, связанные с уведомлениями

  // GET
  // /v2/notifications
  // Возвращает список всех непрочитанных и последних 10 прочитанных уведомлений

  // GET
  // /v2/notifications/amount-of-unread
  // Возвращает количество непрочитанных уведомлений

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
