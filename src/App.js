import { useState } from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { customDarkTheme, customLightTheme } from './customFluentTheme';
import { Header } from "./Views";
import { Navigation } from "./Views";
import { About } from "./Views";
import { Settings } from "./Views";
import { Activity } from "./Views"
import { Chat } from "./Views"
import { Meet } from "./Views"
import { Calendar } from "./Views"

import './App.css';

function App() {
  const [customUserTheme, setCustomUserTheme] = useState('dark');
  const [siteNavigationOrientation, setSiteNavigationOrientation] = useState('vertical');

  return (
    <div className="App">
      <FluentProvider theme={customUserTheme === 'dark' ? customDarkTheme : customLightTheme}>
        <BrowserRouter>
          <Header />
          <Navigation orientation={siteNavigationOrientation === 'vertical' ? 'vertical' : 'horizontal'} />
          <Routes>
            <Route index element={<About />} />
            <Route path="/Settings" element={
              <Settings 
                customUserTheme={customUserTheme} 
                setCustomUserTheme={setCustomUserTheme}
                siteNavigationOrientation={siteNavigationOrientation}
                setSiteNavigationOrientation={setSiteNavigationOrientation}
              />}
            />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Meet" element={<Meet />} />
            <Route path="/Calendar" element={<Calendar />} />
          </Routes>
        </BrowserRouter>
      </FluentProvider>
    </div>
  );
}

export default App;
