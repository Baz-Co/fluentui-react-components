import { NavLink } from "react-router-dom";
import { Tooltip } from "@fluentui/react-components";
import { ServiceBellRegular, ChatRegular, CameraRegular, CalendarRtlRegular, TextT24Regular, SettingsRegular } from "@fluentui/react-icons";
// import { BellIcon, ChatIcon, VideoCameraEmphasisIcon, CalendarIcon } from "@fluentui/react-icons-northstar";

import { Button } from "../Components";

import './Navigation.css'

export function Navigation({ orientation = "horizontal" }) {
  return (
    <nav className={`navigation-${orientation}`}>
      <Tooltip relationship="label" content={"Activity"} appearance="inverted">
        <NavLink to='/Activity'><Button appearance="transparent" size="large" icon={<ServiceBellRegular />} /></NavLink>
      </Tooltip>
      <Tooltip relationship="label" content={"Chat"} appearance="inverted">
        <NavLink to='/Chat'><Button appearance="transparent" size="large" icon={<ChatRegular />} /></NavLink>
      </Tooltip>
      <Tooltip relationship="label" content={"Meet"} appearance="inverted">
        <NavLink to='/Meet'><Button appearance="transparent" size="large" icon={<CameraRegular />} /></NavLink>
      </Tooltip>
      <Tooltip relationship="label" content={"Calendar"} appearance="inverted">
        <NavLink to='/Calendar'><Button appearance="transparent" size="large" icon={<CalendarRtlRegular />} /></NavLink>
      </Tooltip>
      <Tooltip relationship="label" content={"Text"} appearance="inverted">
        <NavLink to='/Text'><Button appearance="transparent" size="large" icon={<TextT24Regular />} /></NavLink>
      </Tooltip>
      <Tooltip relationship="label" content={"Settings"} appearance="inverted">
        <NavLink to='/Settings'><Button appearance="transparent" size="large" icon={<SettingsRegular />} /></NavLink>
      </Tooltip>
    </nav>
  )
}
