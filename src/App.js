import Box from './components/Box';
import UserData from './components/UserData';
import List from './components/List';
import { GlobalStyles } from './styles/globals'
import AddButton from './components/AddButton';
import ItemsProvider from './contexts/ItemsContext'
import WelcomeModal from './components/WelcomeModal';
import {useEffect, useState } from 'react';

function App() {

  const [ welcomeModalOpen, setWelcomeModalOpen ] = useState(true);
  const [ nameInputValue, setNameInputValue ] = useState('');

  useEffect(() => {
    const hasItems = JSON.parse(localStorage.getItem('items'));

    if (hasItems.length > 0) {
      setWelcomeModalOpen(false);
    }
  }, [])

  return (
    <ItemsProvider>
      <WelcomeModal 
        name={nameInputValue} 
        setName={setNameInputValue} 
        isOpen={welcomeModalOpen} 
        onClose={() => setWelcomeModalOpen(false)}
      />
      <GlobalStyles />
      <UserData/>
      <Box />
      <List />
      <AddButton />
    </ItemsProvider>
  );
}

export default App;
