import { Provider } from 'react-redux';
import Routing from './Components/Common/Routing';
import store from './Store/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routing />
      </Provider>
    </>
  );
}

export default App;
