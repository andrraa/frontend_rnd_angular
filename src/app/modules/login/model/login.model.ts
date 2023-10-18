export interface LoginData {
   username: string;
   password: string;
}

export interface LoginResponse {
   success: boolean;
   message: string;
   token: string;
   refresh: string;
}
