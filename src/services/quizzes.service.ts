import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class CalendarService {
  // Методы, связанные с тестовой системой

  // POST
  // /v2/quizzes
  // Создаёт новый тест

  // GET
  // /v2/quizzes/{id}
  // Получает информацию о тесте

  // DELETE
  // /v2/quizzes/{id}
  // Безвозвратно удаляет тест

  // GET
  // /v2/quizzes/{id}/tutors
  // Получает информацию о тесте (специально для преподавателей)

  // POST
  // /v2/quizzes/attempts
  // Начинает попытку выполнения теста

  // PUT
  // /v2/quizzes/attempts/{attempt}/save
  // Сохраняет ответ стажёра на вопрос теста

  // PATCH
  // /v2/quizzes/attempts/{id}
  // Завершает попытку выполнения теста

  // GET
  // /v2/quizzes/question/{attempt}/{questionNumber}
  // Получает вопрос по идентификатору попытки и порядковому номеру вопроса

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
