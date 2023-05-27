"use client"
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Reserva {
    id: number;
    usuario: string;
    data_hora_inicio: string;
    data_hora_fim: string;
    workstation: any;
}

interface ReservasProps {
    reservas: Reserva[];
}

const Reservas: React.FC<ReservasProps> = ({ reservas }) => {
    const [exibirReservas, setExibirReservas] = useState(false);
    const parent = useRef(null)

    const handleClick = () => {
        setExibirReservas(!exibirReservas);
    };
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])


    return (
        <div ref={parent} className="flex items-center flex-col gap-2">
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-auto h-auto `}
                onClick={handleClick}
            >
                {!exibirReservas ? <BsEye className="text-4xl" /> : <BsEyeSlash className="text-3xl" />}
            </button>
            {!exibirReservas && <p className='font-semibold'>Exibir reservas</p>}


            {exibirReservas && (
                <div className="mt-4 p-4 bg-gray-200 shadow-md" >
                    <h2 className="text-xl font-bold mb-2">Reservas:</h2>
                    <ul>
                        {reservas.map((reserva) => (
                            <li key={reserva.id} className="shadow-lg p-5">
                                <span className='font-semibold'>Usuário: </span><p>{reserva.usuario}</p>
                                <span className='font-semibold'>Workstation: </span><p> {reserva.workstation.serial}</p>
                                <span className='font-semibold'>Data e Hora de Início: </span><p>{format(new Date(reserva.data_hora_inicio), 'dd MMM HH:mm', { locale: ptBR })}</p>
                                <span className='font-semibold'>Data e Hora de Fim:</span> <p>{format(new Date(reserva.data_hora_fim), 'dd MMM HH:mm', { locale: ptBR })}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Reservas;