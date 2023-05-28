"use client"
import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { getDaysBetweenDates, getCurrentDateFormatted } from '../utils/utils.ts'

const periods = ['Manhã', 'Tarde', 'Noite']; // Opções de período para os radio buttons

const options = ['Opção 1', 'Opção 2', 'Opção 3'];

async function NovoAgendamento() {

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [dates, setDates] = useState([])
    const [selectedPeriod, setSelectedPeriod] = useState({});
    const [userName, setUserName] = useState('');

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
        setDates(getDaysBetweenDates(newValue.startDate, newValue.endDate))
    }
    const handlePeriodChange = (event, date) => {
        setSelectedPeriod((prevState) => ({
            ...prevState,
            [date]: event.target.value,
        }));
    };
    const handleGlobalPeriodChange = (event) => {
        const newSelectedPeriod = {};
        dates.forEach((date) => {
            newSelectedPeriod[date] = event.target.value;
        });
        setSelectedPeriod(newSelectedPeriod);
    };
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const data = await fetch('http://127.0.0.1:8000/api/workstations/')
    const response = await data.json()
    console.log(response)

    return (
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-evenly p-12 md:flex-col md:items-start lg:flex-col lg:items-start">
            <Datepicker
                i18n={"pt-br"}
                useRange={false}
                asSingle={false}
                value={value}
                onChange={handleValueChange}
                showShortcuts={true}
                showFooter={true}
                configs={{
                    shortcuts: {
                        today: 'Hoje',
                        yesterday: "Amanhã",

                    },
                    footer: {
                        cancel: "Cancelar",
                        apply: "Agendar"
                    }
                }}
                placeholder={"Data de agendamento"}
                minDate={getCurrentDateFormatted()}

            />

            {dates.length > 0 &&
                <table className="table-fixed w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="w-1/3 py-2 px-4 border-b border-gray-300">Dia</th>
                            <th className="w-1/3 py-2 px-4 border-b border-gray-300">Período</th>
                            <th className="w-1/3 py-2 px-4 border-b border-gray-300">Estação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date) => (
                            <tr key={date}>
                                <td className="py-2 px-4 border-b border-gray-300">{date}</td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    {periods.map((period) => (
                                        <label key={period} className="mr-4">
                                            <input
                                                type="radio"
                                                name={`period_${date}`}
                                                value={period}
                                                checked={selectedPeriod[date] === period}
                                                onChange={(event) => handlePeriodChange(event, date)}
                                            />
                                            <span className="ml-1">{period}</span>
                                        </label>
                                    ))}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    <select>
                                        {options.map((option) => (
                                            <option key={option}>{option}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-2 px-4">
                                {periods.map((period) => (
                                    <label key={period} className="mr-4">
                                        <input
                                            type="radio"
                                            name="global_period"
                                            value={period}
                                            checked={Object.values(selectedPeriod).every(
                                                (selectedPeriod) => selectedPeriod === period
                                            )}
                                            onChange={handleGlobalPeriodChange}
                                        />
                                        <span className="ml-1">{period}</span>
                                    </label>
                                ))}
                            </td>
                            <td className="py-2 px-4 border-t border-gray-300">
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={handleUserNameChange}
                                    placeholder="Nome do usuário"
                                    className="w-full p-1 border border-gray-300 rounded"
                                />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            }
        </main>
    )
}

export default NovoAgendamento