import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Application from './Application';
import { Provider } from 'react-redux'
import store from './store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import LoaderComponent from './component/common/LoaderComponent/LoaderComponent';
import { Toaster } from 'react-hot-toast';

let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <LoaderComponent />
        <Application />
      </PersistGate>
    </Provider>

  );
}

export const storeInstance = store;
export default App;
