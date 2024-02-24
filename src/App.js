import './index.css';
import Headers from './components/Headers';
import Mains from './components/Mains';
import { Nome } from './components/Mains';
import { InfoSection } from './components/Mains';



function App() {
  return (
    <>
    <Headers></Headers>
    <Mains></Mains>
    <Nome></Nome>
    
    <InfoSection></InfoSection>
    </>
  );
}

export default App;
