import React from 'react';
import { hot } from 'react-hot-loader';
import SelectDevice from '../../containers/SelectDevice';
import OptionsSidebar from '../../containers/OptionsSidebar';
import Workspace from '../../containers/Workspace';

const App = () => (
  <>
    <SelectDevice />
    <OptionsSidebar />
    <Workspace />
  </>
);

export default hot(module)(App);
