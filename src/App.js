
import Main from './components/Main/Main';
import AgendaState from './context/Agendas/AgendaState';

function App() {
  return (
    <AgendaState>
      <Main />
    </AgendaState>
    
  );
}

export default App;
