// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import HomePage from '../Pages/HomePage.tsx'
import NovoAgendamentoPage from '../Pages/NovoAgendamentoPage.jsx'

export const privateRoutes = [
    {
        path: "/",
        element: <HomePage />,

    },
    {
        path: "novoagendamento",
        element: <NovoAgendamentoPage />
    }
]


export const publicRoutes = [
    {
        path: '/signin',
        element: null
    }
]
