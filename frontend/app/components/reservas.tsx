"use client"
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate';
import { BsEye, BsEyeSlash } from 'react-icons/bs'

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
        <div ref={parent}>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-auto h-auto"
                onClick={handleClick}
            >
                {!exibirReservas ? <BsEye className="text-4xl" /> : <BsEyeSlash className="text-3xl" />}
            </button>


            {exibirReservas && (
                <div className="mt-4 p-4 bg-gray-200 shadow-md" >
                    <h2 className="text-xl font-bold mb-2">Reservas:</h2>
                    <ul>
                        {reservas.map((reserva) => (
                            <li key={reserva.id} className="shadow-lg p-5">
                                <span className='font-semibold'>Usuário: </span><p>{reserva.usuario}</p>
                                <p>Workstation: {reserva.workstation.serial}</p>
                                <p>Data e Hora de Início: {reserva.data_hora_inicio}</p>
                                <p>Data e Hora de Fim: {reserva.data_hora_fim}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Reservas;