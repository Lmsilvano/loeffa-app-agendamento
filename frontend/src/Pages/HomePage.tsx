import BtnNovoAgendamento from "../Components/btnNovoAgendamento";
import ReservasContainer from "../Components/reservasContainer";
import axios from 'axios';
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

const baseURL = "http://127.0.0.1:8000/api/reservas";
const headers = new Headers();
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

function HomePage() {
    const [reservas, setReservas] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/reservas', {
                headers: {
                    "secret-key": 'django-insecure-4$mm2r8d$6xr-!_0@rb+ue-_ufd=lg*(6&ncuv+)qj$-@*paq-',
                },
            });
            const data = await response.data;
            setReservas(data)
        }
        fetchData()
    }, []);
    return (
        <Layout>
            <ReservasContainer reservas={reservas} />
            <BtnNovoAgendamento />
        </Layout>
    )
}

export default HomePage