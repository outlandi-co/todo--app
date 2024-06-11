import  { useRef } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import List from './components/List/List';
import AuthProvider from './context/Auth/Auth';
import SettingsProvider from './context/Settings/Settings';

const App = () => {
  const [opened, { toggle }] = useDisclosure();
  const ref = useRef<HTMLButtonElement | null>(null); // Add type annotation

  return (
    <MantineProvider>
      <AuthProvider>
        <SettingsProvider>
          <Router>
            <Header />
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" ref={ref} />
            <main>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<List />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
