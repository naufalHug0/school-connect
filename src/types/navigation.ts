import type { AppRouteName } from '../constants/routes'
import type { NavigationContainerRef } from '@react-navigation/native'

export type AppNavigationParams = Record<AppRouteName, object | undefined>

export type AppNavigationRef = NavigationContainerRef<AppNavigationParams>