import BtnNovoAgendamento from "../Components/btnNovoAgendamento";
import ReservasContainer from "../Components/reservasContainer";
import axios from 'axios';
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

interface ReservasData {
    date: string;
    periodo: string;
    workstation: WorkistationData;
    usuario: string;
}
interface WorkistationData {
    serial: string,
    localizacao: string
}
function HomePage() {
    const [reservas, setReservas] = useState<ReservasData[]>([])
    const [errors, setErrors] = useState('')
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get('/api/reservas/', {
                    headers: {
                        "secret-key": 'django-insecure-4$mm2r8d$6xr-!_0@rb+ue-_ufd=lg*(6&ncuv+)qj$-@*paq-',
                    },
                });
                const data = await response.data;
                console.log(data)
                if (data.length === 0) setErrors('Não há nenhum agendamento disponível.')
                setReservas(data)
            } catch (e) {
                console.log(e)
                setErrors('Erro interno do servidor, por favor aguarde um momento.')

            }
        }
        fetchData()
    }, []);
    return (
        <Layout>

            <ReservasContainer reservas={reservas} errors={errors} />
            <BtnNovoAgendamento />

        </Layout>
    )
}

export default HomePage