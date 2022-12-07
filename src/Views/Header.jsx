import { Link } from "react-router-dom";
import { SettingsRegular } from "@fluentui/react-icons";

import { Button } from "../Components";
// import { UserLogin } from "./";

import './Header.css'


export function Header({ customUserTheme }) {
  //TODO: Image from msfluent
  return (
    <header className='header'>
      <Link to='/'>
        <Button appearance="transparent" style={{ marginLeft: '4px' }} icon={
          <img src={`${process.env.PUBLIC_URL}/${customUserTheme==='dark'?'fluent-ui-logo-white':'fluent-ui-logo'}.png`} alt="Microsoft Fluent UI Logo" style={{ maxHeight: '28px' }} />}
        />
      </Link>
      {/* <p>Search</p> */}
      {/* <UserLogin /> */}
      <Link to='/Settings'><Button appearance="transparent" size="large" icon={<SettingsRegular />} /></Link>
    </header>
  )
}
