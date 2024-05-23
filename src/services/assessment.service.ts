import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // PATCH
  // /v2/assessment

  // GET
  // /v2/assessment/comparison/{id}
  // Возвращает сравнительный список всех стажёров на стажировке (отсортировано по средневзвешенному баллу всех критериев)

  // GET
  // /v2/assessments/intern/{id}
  // Возвращает список всех критериев с оценкой стажёра по нему

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
