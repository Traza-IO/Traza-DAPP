import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <div className="flex gap-3 bg-red">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
    </div>
  );
}

export default App;
