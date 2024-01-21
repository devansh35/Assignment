import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { text } from './Text';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <IntlProvider locale={language} messages={text[language]}>
      <Navbar onLanguageChange={setLanguage} />
      <div style={{ backgroundColor: '#405F8D', minHeight: '100vh' }}>
        <Header />
        <LoginForm />
      </div>
    </IntlProvider>
  );
}

export default App;
