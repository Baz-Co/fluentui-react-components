import { useState } from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { customDarkTheme, customLightTheme } from './customFluentTheme';
import {
  Header,
  Navigation,
  About,
  Settings,
  Activity,
  Chat,
  Meet,
  Calendar,
  Text
} from "./Views";

import './App.css';

function App() {
  const [customUserTheme, setCustomUserTheme] = useState('dark');
  const [siteNavigationOrientation, setSiteNavigationOrientation] = useState('vertical');

  return (
    <div className="App">
      <FluentProvider theme={customUserTheme === 'dark' ? customDarkTheme : customLightTheme}>
        <BrowserRouter>
          <Header customUserTheme={customUserTheme} />
          <div style={siteNavigationOrientation === 'vertical' ? { display: 'flex' } : null}>
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
              <Route path="/Text" element={<Text />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FluentProvider>
    </div>
  );
}

export default App;
