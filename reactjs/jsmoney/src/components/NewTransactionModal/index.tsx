import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outImg from '../../assets/saidas.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        const data ={
            title,
            value,
            category,
            type
        };

        api.post('./transactions ', data)
    }

    return (
    <Modal 
       isOpen={isOpen} 
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       >

        <button 
        type='button'
        onClick={onRequestClose}
        className="react-modal-close">

        <img src={closeImg} alt='Fechar modal' />

        </button>

       <Container onSubmit={handleCreateNewTransaction}>
        <h2> Cadastrar transação</h2>

        <input
        type="text"
        placeholder="Título"
        value={title}
        // onchange = funcao que executa toda vez que um novo texto for digitado dentro do input
        onChange={event => setTitle(event.target.value)}
        />
        <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
            <RadioBox 
            onClick={() => {setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor="green"
            >
                <img src={incomeImg} alt="Entrada"/>
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
            onClick={() => {setType('withdraw');}}
            isActive={type === 'withdraw'}
            activeColor="red"
             >
                <img src={outImg} alt="Saída"/>
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>
        
        <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
       </Container>
    </Modal>
    )
}