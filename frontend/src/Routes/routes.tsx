import HomePage from '../Pages/HomePage.tsx'


export const privateRoutes = [
    {
        path: "/",
        element: <HomePage />,
    }]


export const publicRoutes = [
    {
        path: '/signin',
        element: null
    }
]    