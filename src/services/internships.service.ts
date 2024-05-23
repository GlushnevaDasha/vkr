import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // Методы, связанные с управлением стажировками

  // GET
  // /v2/criteria
  // Возвращает список всех критериев

  // GET
  // /v2/internships
  // Возвращает список всех курсов

  // POST
  // /v2/internships
  // Создаёт новый курс

  // DELETE
  // /v2/internships/{id}
  // Перманентно удаляет курс

  // GET
  // /v2/internships/{id}/role
  // Возвращает роль текущего пользователя на указанной стажировке

  // GET
  // /v2/internships/enrolled
  // Возвращает список курсов, доступных для текущего пользователя, отфильтрованных по типу курса

  // POST
  // /v2/internships/invite-tutor
  // Добавляет пользователей в список владельцев курса

  // GET
  // /v2/internships/owned
  // Возвращает список курсов, которыми владеет текущий пользователь

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
