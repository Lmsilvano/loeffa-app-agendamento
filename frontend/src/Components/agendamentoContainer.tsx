import { useState, useEffect } from 'react';
import { formataData } from '../utils/utils.ts'
import axios from 'axios'
interface AgendamentoContainerProps {
    dates: string[];
}

interface AgendamentoData {
    date: string;
    periodo: string;
    workstation: string;
    usuario: string;
}
interface WorkstationData {
    serial: string;
    localizacao: string;
    configuracoes: string;
}



const AgendamentoContainer: React.FC<AgendamentoContainerProps> = ({ dates }) => {
    const [workstationData, setWorkstationData] = useState<WorkstationData[]>([]);
    const [agendamentoData, setAgendamentoData] = useState<AgendamentoData[]>([]);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [sucess, setSucess] = useState(false)
    const [errors, setErrors] = useState(false)
    useEffect(() => {
        const agendamentos: AgendamentoData[] = dates.map((date: string) => ({
            date,
            periodo: '',
            workstation: '',
            usuario: ''
        }));
        setAgendamentoData(agendamentos)
        const fetchData = async () => {
            const response = await axios.get('/api/workstations/', {
                headers: {
                    "secret-key": 'django-insecure-4$mm2r8d$6xr-!_0@rb+ue-_ufd=lg*(6&ncuv+)qj$-@*paq-',
                },
            });
            const data = await response.data;
            setWorkstationData(data.workstations)
        }
        fetchData()
    }, [dates]);

    const handlePeriodoChange = (
        date: string,
        periodo: string,

    ) => {
        const updatedAgendamentoData = agendamentoData.map((data) =>
            data.date === date ? { ...data, periodo } : data
        );
        setAgendamentoData(updatedAgendamentoData);
    };

    const handleWorkstationChange = (date: string, workstation: string) => {
        const updatedAgendamentoData = agendamentoData.map((data) =>
            data.date === date ? { ...data, workstation } : data
        );
        setAgendamentoData(updatedAgendamentoData);
    };


    const handleAgendamento = () => {
        const updatedAgendamentoData = agendamentoData.map((data) => {
            data.date = formataData(data.date)
            data.usuario = nomeUsuario
            return data
        });
        console.log(updatedAgendamentoData);
        //const request = JSON.stringify(updatedAgendamentoData)
        createReservas(updatedAgendamentoData)
    };
    const createReservas = async (reservas: AgendamentoData[]) => {
        try {
            const response = await axios.post('/api/novasreservas/', { reservas });
            setSucess(true)
            setTimeout(() => {
                setSucess(false)
            }, 3000);
            console.log(response)
        } catch (error) {
            console.error(error);
            setErrors(true)
            setTimeout(() => {
                setErrors(false)
            }, 3000);
        }
    };

    return (
        <div className="w-full md:w-3/4 mx-auto text-cyan-950 p-4">
            <p className="text-2xl font-bold mb-2 border">Selecione os períodos e as estações de trabalho:</p>
            <table className="w-full border table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Dia</th>
                        <th className="border px-4 py-2">Período</th>
                        <th className="border px-4 py-2">Estações</th>
                    </tr>
                </thead>
                <tbody>
                    {dates.map((date, i) => (
                        <tr key={date} className="border-cyan-950">
                            <td className="border px-4 py-2">{date}</td>
                            <td className="border px-4 py-2 flex flex-row justify-center items-center">
                                <div className="flex flex-col md:flex-row gap-1 w-full md:justify-center md:gap-5">
                                    <label className="flex">
                                        <input
                                            type="radio"
                                            name={`${date.replace(/\s/g, '')}`}
                                            value="manha"
                                            checked={agendamentoData[i]?.periodo === 'manha'}
                                            onChange={() => handlePeriodoChange(date, 'manha')}
                                        />
                                        <p className="ml-2">Manhã</p>
                                    </label>
                                    <label className="flex">
                                        <input
                                            type="radio"
                                            name={`${date.replace(/\s/g, '')}`}
                                            value="tarde"
                                            checked={agendamentoData[i]?.periodo === 'tarde'}
                                            onChange={() => handlePeriodoChange(date, 'tarde')}
                                        />
                                        <p className="ml-2">Tarde</p>
                                    </label>
                                    <label className="flex">
                                        <input
                                            type="radio"
                                            name={`${date.replace(/\s/g, '')}`}
                                            value="noite"
                                            checked={agendamentoData[i]?.periodo === 'noite'}
                                            onChange={() => handlePeriodoChange(date, 'noite')}
                                        />
                                        <p className="ml-2">Noite</p>
                                    </label>
                                </div>
                            </td>
                            <td className="border px-4 py-2">
                                <select
                                    value={agendamentoData.find((data) => data.date === date)?.workstation || ''}
                                    onChange={(e) => handleWorkstationChange(date, e.target.value)}
                                    className="text-cyan-950 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >

                                    <option value="">Selecione</option>
                                    {workstationData.length > 0 ? workstationData.map((workstation) => (
                                        <option value={`${workstation.serial}`} key={workstation.serial}>{workstation.serial}</option>
                                    ))
                                        : (<option className='text-red-600'>Sem estações disponíveis para data selecionada.</option>)

                                    }
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <input
                    type="text"
                    value={nomeUsuario}
                    onChange={(e) => setNomeUsuario(e.target.value)}
                    placeholder="Usuário"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-cyan-950 w-1/2"
                />
                <button
                    onClick={handleAgendamento}
                    className="bg-cyan-950 text-white px-1 py-1 rounded-md focus:outline-none hover:bg-blue-600 w-1/3"
                >
                    Agendar
                </button>
            </div>
            {sucess && (<p className='font-semibold text-green-700 mt-10 text-lg'>Reservas feitas com sucesso!</p>)}
            {errors && (<h1 className='font-semibold text-red-600 mt-10 text-lg'>Erro!! Preencha corretamente todos os campos, e tente novamente.</h1>)}
        </div>
    );
};

export default AgendamentoContainer;