import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { getDaysBetweenDates, getCurrentDateFormatted } from '../utils/utils.ts'
import Layout from '../Layout/Layout.tsx'
import AgendamentoContainer from '../Components/agendamentoContainer.tsx'
function NovoAgendamentoPage() {
    const [selectedDate, setSelectedDate] = useState({
        startDate: null,
        endDate: null
    });
    const [dates, setDates] = useState([])

    const handleDateChange = (date) => {
        if (!date.startDate) {
            return
        }
        setSelectedDate(date);
        setDates(getDaysBetweenDates(date.startDate, date.endDate))
    };
    return (
        <Layout>
            <div className="flex flex-col w-3/4">
                <div className="xl:w-1/2 border shadow-lg border-blue-950 rounded-md p-2 mb-16">
                    <h1 className='xl:text-2xl font-semibold text-cyan-950' >Dica:</h1>
                    <p className='font-semibold text-cyan-950 text-justify text-xs md:text-base'>
                        Você pode selecionar uma unica data clicando duas vezes no dia desejado
                        - a borda do seletor fica redonda confirmando a seleção -,
                        ou agendar um intervalo de tempo, clicando no data de inicio do intervalo
                        e então na data final.</p>
                </div>
                <Datepicker
                    i18n={"pt-br"}
                    useRange={false}
                    asSingle={false}
                    value={selectedDate}
                    onChange={handleDateChange}
                    showShortcuts={true}
                    showFooter={true}
                    configs={{
                        shortcuts: {
                            today: 'Hoje',
                        },
                        footer: {
                            cancel: "Cancelar",
                            apply: "Agendar"
                        }
                    }}
                    placeholder={"Data de agendamento"}
                    minDate={getCurrentDateFormatted()}
                    toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                />
            </div>
            {dates.length > 0 && <AgendamentoContainer dates={dates} />}

        </Layout >
    )
}

export default NovoAgendamentoPage