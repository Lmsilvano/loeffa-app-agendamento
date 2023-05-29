import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { getDaysBetweenDates, getCurrentDateFormatted } from '../utils/utils.js'
import Layout from '../Layout/Layout.js'

function NovoAgendamentoPage() {
    const [value, setValue] = useState({
    });
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
        //setDates(getDaysBetweenDates(newValue.startDate, newValue.endDate))
    }
    return (
        <Layout>
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

        </Layout >
    )
}

export default NovoAgendamentoPage