import React from 'react';
import { render } from 'react-dom';

import AppContainer from './components/app-container/app-container';

import { Router, Route } from 'react-router';

render(<AppContainer />, document.getElementById('app'));