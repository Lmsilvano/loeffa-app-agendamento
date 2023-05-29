import { useState } from 'react'

interface AgendamentoContainerProps {
    dates: string[];
}

interface AgendamentoData {
    date: string;
    periodo: string;
    workstation: string;
}

const AgendamentoContainer: React.FC<AgendamentoContainerProps> = ({ dates }) => {
    const [agendamentoData, setAgendamentoData] = useState<AgendamentoData[]>([]);
    const [nomeUsuario, setNomeUsuario] = useState("");

    const handlePeriodoChange = (date: string, periodo: string) => {
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
        console.log(agendamentoData);
    };

    return (
        <div className="max-w-2xl mx-auto bg-cyan-950 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Agendamento Container</h1>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Data do agendamento</th>
                        <th className="border px-4 py-2">Período</th>
                        <th className="border px-4 py-2">Workstation</th>
                    </tr>
                </thead>
                <tbody>
                    {dates.map((date) => (
                        <tr key={date} className="border-cyan-950">
                            <td className="border px-4 py-2">{date}</td>
                            <td className="border px-4 py-2">
                                <div>
                                    <label className="inline-block mr-2">
                                        <input
                                            type="radio"
                                            name={`periodo-${date}`}
                                            value="manha"
                                            checked={agendamentoData.find((data) => data.date === date)?.periodo === "manha"}
                                            onChange={() => handlePeriodoChange(date, "manha")}
                                        />
                                        Manhã
                                    </label>
                                    <label className="inline-block mr-2">
                                        <input
                                            type="radio"
                                            name={`periodo-${date}`}
                                            value="tarde"
                                            checked={agendamentoData.find((data) => data.date === date)?.periodo === "tarde"}
                                            onChange={() => handlePeriodoChange(date, "tarde")}
                                        />
                                        Tarde
                                    </label>
                                    <label className="inline-block">
                                        <input
                                            type="radio"
                                            name={`periodo-${date}`}
                                            value="noite"
                                            checked={agendamentoData.find((data) => data.date === date)?.periodo === "noite"}
                                            onChange={() => handlePeriodoChange(date, "noite")}
                                        />
                                        Noite
                                    </label>
                                </div>
                            </td>
                            <td className="border px-4 py-2">
                                <select
                                    value={agendamentoData.find((data) => data.date === date)?.workstation || ""}
                                    onChange={(e) => handleWorkstationChange(date, e.target.value)}
                                    className="text-cyan-950 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Selecione</option>
                                    <option value="workstation1">Workstation 1</option>
                                    <option value="workstation2">Workstation 2</option>
                                    <option value="workstation3">Workstation 3</option>
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
                    placeholder="Nome do usuário"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-cyan-950"
                />
                <button
                    onClick={handleAgendamento}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
                >
                    Realizar Agendamento
                </button>
            </div>
        </div>
    );
};

export default AgendamentoContainer;