
export namespace PathsMap {
    export const root = {
        get: () => '/',
    }

    export const login = {
        get: () => '/login',
        create: {
            get: () => '/login/create',
        },
    }

    export const about = {
        get: () => '/about',
    }

    export const edit = {
        get: () => '/edit',
    }

    export const feature = {
        get: () => '/feature',
    }

    export const help = {
        get: () => '/help',
    }
}