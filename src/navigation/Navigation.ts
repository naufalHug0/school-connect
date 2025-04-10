import { CommonActions, NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { ScreenRoutes } from "../constant/ScreenRoutes";

const navigationRef = React.createRef<NavigationContainerRef<any>>()

type RouteName = keyof typeof ScreenRoutes["public"] | keyof typeof ScreenRoutes["registered"]

export default class Navigation {
    static navigate (name: RouteName, params?: object) {
        navigationRef.current?.navigate(name, params)
    }   

    static resetStack (routes: { name: string; params?: object }[], index = 0) {
        navigationRef.current?.dispatch(
            CommonActions.reset({
            index,
            routes,
            })
        )
    }
}