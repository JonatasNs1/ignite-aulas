import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal(){
      setIsNewTrasactionModalOpen(true);
  }
  function handleCloseNewTrasactionModal(){
      setIsNewTrasactionModalOpen(false);
  }

  return (
    <>
      <Header 
      onOpenNewTransitionModal ={handleOpenNewTrasactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
        />
      <GlobalStyle/>
    </>
  );
}

export default App;
