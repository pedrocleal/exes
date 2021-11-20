import Box from './components/Box';
import UserData from './components/UserData';
import List from './components/List';
import { GlobalStyles } from './styles/globals'
import AddButton from './components/AddButton';
import ItemsProvider from './contexts/ItemsContext'

function App() {
  return (
    <ItemsProvider>
      <GlobalStyles />
      <UserData />
      <Box />
      <List />
      <AddButton />
    </ItemsProvider>
  );
}

export default App;
