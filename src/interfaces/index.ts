export interface RootState {
  currentUser: string;
  error: string;
  loading: boolean;
}

export interface FormData {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  email: string;
}
