/* eslint-disable */
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';



const ReservasContainer = ({ reservas }: any) => {
    const [exibirReservas, setExibirReservas] = useState(false);
    const [parent,] = useAutoAnimate()

    const handleClick = () => {
        setExibirReservas(!exibirReservas);
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


            {/* {exibirReservas && (
                <div className="mt-4 p-4 bg-cyan-50 shadow-md" >
                    <h2 className="text-xl font-bold mb-2 text-cyan-950">Reservas:</h2>
                    <ul>
                        {reservas.map((reserva: any) => (
                            <li key={reserva.id} className="shadow-lg p-5">
                                <span className='font-semibold text-cyan-950'>Usuário: </span><p className='text-cyan-900'>{reserva.usuario}</p>
                                <span className='font-semibold text-cyan-950'>Workstation: </span><p className='text-cyan-900'> {reserva.workstation.serial}</p>
                                <span className='font-semibold text-cyan-950'>Data e Hora de Início: </span><p className='text-cyan-900'>{format(new Date(reserva.data_hora_inicio), 'dd MMM HH:mm', { locale: ptBR })}</p>
                                <span className='font-semibold text-cyan-950'>Data e Hora de Fim:</span> <p className='text-cyan-900'>{format(new Date(reserva.data_hora_fim), 'dd MMM HH:mm', { locale: ptBR })}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}

            {exibirReservas && (
                <div className="mt-4 p-4 bg-cyan-50 shadow-md" >
                    <h2 className="text-xl font-bold mb-2 text-cyan-950">Reservas:</h2>
                    <ul>
                        {reservas.map((reserva: any) => (
                            <li key={reserva.id} className="shadow-lg p-5">
                                <span className='font-semibold text-cyan-950'>Usuário: </span><p className='text-cyan-900'>{reserva.usuario}</p>
                                <span className='font-semibold text-cyan-950'>Workstation: </span><p className='text-cyan-900'> {reserva.workstation.serial}</p>
                                <span className='font-semibold text-cyan-950'>Data e Hora de Início: </span><p className='text-cyan-900'>{format(new Date(reserva.data_hora_inicio), 'dd MMM HH:mm', { locale: ptBR })}</p>
                                <span className='font-semibold text-cyan-950'>Data e Hora de Fim:</span> <p className='text-cyan-900'>{format(new Date(reserva.data_hora_fim), 'dd MMM HH:mm', { locale: ptBR })}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default ReservasContainer;