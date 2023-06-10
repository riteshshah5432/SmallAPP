import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application'
import store from './store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
let persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
