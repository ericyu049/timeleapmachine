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
export interface SignUpRequest {
    uuid: any,
    username: string,
    password: string,
    email: string
}
export interface SignUpResponse {
    rspCde: number,
    rspMsg: string
}
export interface RefreshTokenRequest {
    refreshToken: string;
}
export interface RefreshTokenResponse {
    token: string;
}