import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Workstationicon from '../assets/workstationicon';
import { formatarDataInverso } from '../utils/utils.ts';
import Calendar from '../assets/calendar.tsx';
import TimeSvg from '../assets/time.tsx';
interface ReservasContainerProps {
    reservas: ReservasData[];
    errors: string;
}

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

const ReservasContainer: React.FC<ReservasContainerProps> = ({ reservas, errors }) => {
    const [exibirReservas, setExibirReservas] = useState(false);
    const [msgerror, setMsgerror] = useState(false)
    const [parent,] = useAutoAnimate()

    const handleClick = () => {
        if (errors !== '') {
            setExibirReservas(false)
            setMsgerror(true)
            setTimeout(() => {
                setMsgerror(false)
            }, 3000);
        } else {
            console.log(reservas)
            setExibirReservas(!exibirReservas);
        }
    };

    return (
        <div ref={parent} className="flex items-center flex-col gap-2">
            <button
                className={`bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded-md w-auto h-auto `}
                onClick={handleClick}
            >
                {!exibirReservas ? <BsEye className="text-4xl" /> : <BsEyeSlash className="text-3xl" />}
            </button>
            {!exibirReservas && <p className='font-semibold text-cyan-950'>Exibir reservas</p>}
            {msgerror && <p className='font-semibold text-red-600'>{errors}</p>}

            {exibirReservas && (
                <div className="mt-4 p-4 bg-cyan-50 shadow-md w-auto flex justify-center items-center flex-col" >
                    <h2 className="text-xl font-bold mb-2 text-cyan-950">Reservas:</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 gap-6'>
                        {reservas.map((reserva: ReservasData, i: number) => (
                            <div className='justify-self-auto ' key={i}>
                                <div className="pl-5">
                                    <span className='font-semibold text-cyan-950'>Usuário: </span>
                                    <div className="flex items-center justify-start gap-2">
                                        <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt=""
                                            className='h-8 w-8 rounded-md' />
                                        <p className='text-cyan-700'>{reserva.usuario}</p>
                                    </div>
                                </div>

                                <div key={reserva.workstation.serial} className="shadow-lg p-5 flex-col flex-1">

                                    <span className='font-semibold text-cyan-950'>Workstation: </span>
                                    <div className="flex items-center justify-start gap-2">
                                        <Workstationicon />
                                        <p className='text-cyan-700'> {reserva.workstation.serial}</p>
                                    </div>
                                    <span className='font-semibold text-cyan-950'>Dia: </span>
                                    <div className="flex items-center justify-start gap-2">
                                        <Calendar />
                                        <p className='text-cyan-700'>{formatarDataInverso(reserva.date)}</p>
                                    </div>
                                    <span className='font-semibold text-cyan-950'>Período: </span>
                                    <div className="flex items-center justify-start gap-2">
                                        <TimeSvg />
                                        <p className='text-cyan-700'>{reserva.periodo.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

};

export default ReservasContainer;