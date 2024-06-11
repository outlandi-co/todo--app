import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
