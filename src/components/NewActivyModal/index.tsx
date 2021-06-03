import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Container } from '../Button/styles';

interface NewActivyModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData{
    courseunity:string;
    activy:string;
    date:Date;
}

export function NewActivyModal({isOpen,onRequestClose}:NewActivyModalProps){

    const {register, handleSubmit, formState:{errors}} = useForm<NewActivyModalData>()

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        
        >
            <Container>
                <h2>Cadastrar atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20} />
                </button>
                <form action="">
                    <input 
                        type="text"
                        placeholder="Unidade curricular"
                        {...register("courseunity",{required:true})}
                    ><input 
                        type="text"
                        placeholder="Atividade"
                        {...register("activy",{required:true})}
                    ></input>
                    <input 
                        type="date"
                        placeholder="Data da atividade"
                        {...register("date",{required:true})}
                    ></input>

                    </input>
                </form>
            </Container>

        </Modal>
    )
}
