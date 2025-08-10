export const ROUTES = {
    public: {
        welcome:"welcome",
        login:"login",
    },
    registered: {
        home:"home",
        profile:"profile"
    }
} as const

export type PublicRouteName = keyof typeof ROUTES.public
export type RegisteredRouteName = keyof typeof ROUTES.registered
export type AppRouteName = PublicRouteName | RegisteredRouteName