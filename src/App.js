import './App.css';


import { Provider } from 'react-redux';

import Region from './components/countryRegion';
import Store from './Store/Store';


function App() {
  return (

    <Provider store={Store}>
   
    <div class="App">
    
  <Region />
    
    </div>
   
    </Provider>
  );
}

export default App;