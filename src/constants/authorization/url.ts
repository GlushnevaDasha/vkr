import { commonUrl } from "../common";

const sectionUrl = `${commonUrl}/auth`;

export const authorizationUrl: Record<string, string> = {
  delete: `${sectionUrl}/delete`,
  logIn: `${sectionUrl}/log-in`,
  signUp: `${sectionUrl}/sign-up`,
  whoami: `${sectionUrl}/whoami`,
};
