import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // Методы, связанные с кастомными событиями

  // POST
  // /v2/events
  // Создаёт новое событие

  // GET
  // /v2/events/{id}
  // Получить событие по идентификатору

  // GET
  // /v2/events/required-info
  // Получить событие по идентификатору

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
