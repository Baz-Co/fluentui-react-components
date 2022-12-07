import { useState } from "react";
import { Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem, MenuItemRadio, LargeTitle, Title1, Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@fluentui/react-components";

const Theme = ({ customUserTheme, setCustomUserTheme }) => {
  return (
    <>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton>Theme: {customUserTheme}</MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={() => setCustomUserTheme('light')}>Light</MenuItem>
            <MenuItem onClick={() => setCustomUserTheme('dark')}>Dark</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  )
}

const SiteNavigation = ({ siteNavigationOrientation, setSiteNavigationOrientation }) => {
  const [checkedValues, setCheckedValues] = useState({ navigation: [`${siteNavigationOrientation}`] });
  const onChange = (e, { name, checkedItems }) => {
    setCheckedValues(s => ({ ...s, [name]: checkedItems }));
    setSiteNavigationOrientation(checkedItems[0]);
  };

  return (
    <>
      <Menu checkedValues={checkedValues} onCheckedValueChange={onChange}>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton>Orientation: {siteNavigationOrientation}</MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItemRadio name="navigation" value="vertical">vertical</MenuItemRadio>
            <MenuItemRadio name="navigation" value="horizontal">horizontal</MenuItemRadio>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  )
}

export function Settings({ customUserTheme, setCustomUserTheme, siteNavigationOrientation, setSiteNavigationOrientation }) {
  return (
    <div style={{ height: '100vh' }}>
      <LargeTitle block>Settings</LargeTitle>

      <Accordion style={{ display: 'inline-block' }} multiple collapsible defaultOpenItems="theme">
        <AccordionItem value="theme">
          <AccordionHeader><Title1 block>Theme</Title1></AccordionHeader>
          <AccordionPanel>
            <Theme customUserTheme={customUserTheme} setCustomUserTheme={setCustomUserTheme} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="navigation">
          <AccordionHeader><Title1 block>Site Navigation</Title1></AccordionHeader>
          <AccordionPanel>
            <SiteNavigation siteNavigationOrientation={siteNavigationOrientation} setSiteNavigationOrientation={setSiteNavigationOrientation} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
