import Box from './components/Box';
import UserData from './components/UserData';
import List from './components/List';
import { GlobalStyles } from './styles/globals'
import AddButton from './components/AddButton';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserData />
      <Box />
      <List />
      <AddButton />
    </>
  );
}

export default App;
