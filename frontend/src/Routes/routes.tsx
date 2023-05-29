/* eslint-disable */
import HomePage from '../Pages/HomePage.tsx'
import NovoAgendamentoPage from '../Pages/NovoAgendamentoPage.jsx'

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

/* eslint-enable */