"use client"
import Link from 'next/link'
import autoAnimate from '@formkit/auto-animate';
import { IoMdAddCircleOutline } from 'react-icons/io';




const NovaReservaButton = () => {


    return (
        <div className="flex flex-col items-center justify-center gap-2 w-auto">
            <Link href={`agendamento`} className='flex flex-col items-center justify-center gap-2'>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-auto h-auto `}
                >
                    <IoMdAddCircleOutline className="text-4xl" />
                </button>
                <p className='font-semibold'>Novo agendamento</p>

            </Link>
        </div>
    );
};

export default NovaReservaButton;