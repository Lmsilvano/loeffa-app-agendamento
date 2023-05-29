import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from 'react-icons/io';




const BtnNovoAgendamento = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center gap-2 w-auto">
            <div onClick={() => navigate(`/novoagendamento`)} className='flex flex-col items-center justify-center gap-2'>
                <button
                    className={`bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded-md w-auto h-auto `}
                >
                    <IoMdAddCircleOutline className="text-4xl" />
                </button>
                <p className='font-semibold text-cyan-950'>Novo agendamento</p>

            </div>
        </div>
    );
};

export default BtnNovoAgendamento;