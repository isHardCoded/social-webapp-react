import Home from "../pages/home/Home"

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
        auth: false,
    },

    {
        path: "/profile/:id",
        exact: false,
        component: Home,
        auth: false,
    },

    {
        path: "/messages",
        exact: true,
        component: Home,
        auth: false,
    },

    {
        path: "/message/:id",
        exact: false,
        component: Home,
        auth: false,
    },

    {
        path: "/friends/:id",
        exact: true,
        component: Home,
        auth: false,
    },

    {
        path: "/auth",
        exact: true,
        component: Home,
        auth: false,
    },
]