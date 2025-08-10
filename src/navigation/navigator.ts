import { CommonActions } from '@react-navigation/native'
import { navigationRef } from './navigationRef'
import type { AppRouteName } from '../constants/routes'

export class Navigator {
    static navigate(name: AppRouteName, params?: object) {
        navigationRef.current?.navigate(name as never, params)
    }

    static goBack() {
        navigationRef.current?.goBack()
    }

    static resetStack(routes: { name: AppRouteName; params?: object }[], index = 0) {
        navigationRef.current?.dispatch(
        CommonActions.reset({
            index,
            routes,
        })
        )
    }
}