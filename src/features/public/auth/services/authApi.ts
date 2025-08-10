import apiClient from '../api.client'
import { LoginRequest, RegisterRequest, AuthResponse } from '../types/authTypes'

const AUTH_BASE_PATH = '/auth'

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>(`${AUTH_BASE_PATH}/login`, credentials)
    return data
}

export const register = async (userInfo: RegisterRequest): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>(`${AUTH_BASE_PATH}/register`, userInfo)
    return data
}

export const forgotPassword = async (email: string): Promise<{ message: string }> => {
    const { data } = await apiClient.post<{ message: string }>(`${AUTH_BASE_PATH}/forgot-password`, { email })
    return data
}

export const resetPassword = async (token: string, newPassword: string): Promise<{ message: string }> => {
    const { data } = await apiClient.post<{ message: string }>(`${AUTH_BASE_PATH}/reset-password`, { token, newPassword })
    return data
}