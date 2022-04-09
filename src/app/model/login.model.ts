export interface LoginRequest {
    username: string,
    password: string
}
export interface LoginResponse{
    rspCde: number,
    rspMsg: string,
    token: string,
    refreshToken: string
}
export interface RefreshTokenRequest {
    refreshToken: string;
}
export interface RefreshTokenResponse {
    token: string;
}