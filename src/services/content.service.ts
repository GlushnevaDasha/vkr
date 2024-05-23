import axios from "axios";
import { authorizationUrl } from "../constants";
import { LoginRequest, SignupRequest } from "../models";

export class ContentService {
  // Методы, связанные с управлением заданиями на стажировках

  // POST
  // /v2/content/assignments
  // Добавляет новое задание на стажировку

  // POST
  // /v2/content/assignments/{assignmentId}/solutions
  // Добавляет новое задание на стажировку

  // PUT
  // /v2/content/assignments/{id}
  // Обновляет задание на стажировке

  // GET
  // /v2/content/assignments/{id}
  // Получает информацию о задании

  // DELETE
  // /v2/content/assignments/{id}
  // Удалаяет задание на стажировке

  // GET
  // /v2/content/assignments/{id}/solutions
  // Получает список решений задания

  // GET
  // /v2/content/solutions/{id}
  // Получает информацию о решении задания

  // POST
  // /v2/content/solutions/{solutionId}/comments
  // Добавляет новый комментарий на решение задания

  // GET
  // /v2/content/{id}
  // Получает список контента на стажировке

  // Методы, связанные с управлением файловым контентом на стажировках

  // POST
  // /v2/content/file
  // Добавляет новый файловый контент на курс

  // GET
  // /v2/content/file/{id}
  // Получает информацию о файловом контенте

  // PUT
  // /v2/content/file/{id}
  // Обновляет файловый контент на курсе

  // DELETE
  // /v2/content/file/{id}
  // Удаляет файловый контент из курса

  // GET
  // /v2/content/file/{id}/download
  // Отдаёт поток с запрошенным файлом

  //   Методы, связанные с управлением текстовым контентом на стажировках

  // POST
  // /v2/content/text
  // Добавляет новый текстовый контент на курс

  // PUT
  // /v2/content/text/{id}
  // Обновляет текстовый контент на стажировку

  // DELETE
  // /v2/content/text/{id}
  // Удаляет текстовый контент со стажировки

  //   Ссылки
  // Методы, связанные с управлением ссылочным контентом на стажировках

  // POST
  // /v2/content/link
  // Добавляет новый ссылочный контент на курс

  // PUT
  // /v2/content/link/{id}
  // Обновляет ссылочный контент на стажировке

  // DELETE
  // /v2/content/link/{id}
  // Удаляет ссылочный контент со стажировки

  public deleteUser = async () => await axios.delete(authorizationUrl.delete);
  public logIn = async (params: LoginRequest) =>
    await axios.post(authorizationUrl.logIn, params);
  public signUp = async (params: SignupRequest) =>
    await axios.post(authorizationUrl.signUp, params);
  public fetchUsersInfo = async () => await axios.get(authorizationUrl.whoami);
}
