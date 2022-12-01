import { Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem, Divider, LargeTitle, Title1 } from "@fluentui/react-components";

const Theme = ({ customUserTheme, setCustomUserTheme }) => {
  return (
    <>
      <Title1 block>Theme</Title1>
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
  return (
    <>
      <Title1 block>Site Navigation</Title1>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton>Orientation: {siteNavigationOrientation}</MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={() => setSiteNavigationOrientation('vertical')}>vertical</MenuItem>
            <MenuItem onClick={() => setSiteNavigationOrientation('horizontal')}>horizontal</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  )
}

export function Settings({ customUserTheme, setCustomUserTheme, siteNavigationOrientation, setSiteNavigationOrientation }) {
  return (
    <div style={{ height: '100vh' }}>
      <LargeTitle>Settings</LargeTitle>
      <Divider style={{ display: 'inline' }} />
      <Theme customUserTheme={customUserTheme} setCustomUserTheme={setCustomUserTheme} />
      <Divider style={{ display: 'inline' }} />
      <SiteNavigation siteNavigationOrientation={siteNavigationOrientation} setSiteNavigationOrientation={setSiteNavigationOrientation} />
    </div>
  )
}
