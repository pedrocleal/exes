import {useEffect, useState } from 'react';
import { GlobalStyles } from '../../styles/globals';

import Box from '../Box';
import UserData from '../UserData';
import List from '../List';
import AddButton from '../AddButton';
import WelcomeModal from '../WelcomeModal';

import { Top, Bottom } from './styles';

import ItemsProvider from '../../contexts/ItemsContext'

function App() {

  const [ welcomeModalOpen, setWelcomeModalOpen ] = useState(true);
  const [ nameInputValue, setNameInputValue ] = useState('');

  useEffect(() => {
    const hasName = JSON.parse(localStorage.getItem('username'));

    if (hasName) {
      setWelcomeModalOpen(false);
    }
  }, [])

  return (
    <ItemsProvider>
      <GlobalStyles />
      <WelcomeModal 
        name={nameInputValue} 
        setName={setNameInputValue} 
        isOpen={welcomeModalOpen} 
        onClose={() => setWelcomeModalOpen(false)}
        />
      <Top>
        <UserData/>
        <Box />
      </Top>
      <Bottom>
        <List />
        <AddButton />
      </Bottom>
    </ItemsProvider>
  );
}

export default App;
