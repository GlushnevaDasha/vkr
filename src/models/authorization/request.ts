export type LoginRequest = {
  email: string;
  password: string;
};

export type SignupRequest = LoginRequest & {
  firstName: string;
  lastName: string;
  patronymic: string | null;
};
