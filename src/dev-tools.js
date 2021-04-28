import * as React from 'react'
import ReactDOM from 'react-dom'
import { FaTools } from 'react-icons/fa'
import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Checkbox,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import Decorator from './Decorator'
import useLocalStorageState from './hooks/useLocalStorageState'
import flags from './flags.json'

const ToolBox = styled(Box)`
  position: fixed;
  bottom: ${({ bottom }) => bottom}px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
`

const ToggleBox = styled(Button)`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 10px 20px;
  border-radius: 0px;
  margin-top: -40px;
  overflow: hidden;
  border-top-right-radius: 10px;
`

function install() {
  function DevTools() {
    const [open, toggleOpen] = useLocalStorageState('__devtools_open__', false)

    const toggleShow = () => toggleOpen(v => !v)

    const style = open ? '0' : '-300'
    const text = open ? 'close' : 'dev-tools'

    const featureFlags = Object.entries(flags)

    return (
      <Decorator>
        <ToolBox w="100%" h="300px" bottom={style}>
          <ToggleBox leftIcon={<FaTools />} onClick={toggleShow}>
            {text}
          </ToggleBox>
          <Text fontSize="lg" p="2">
            Dallas's Dev Tools
          </Text>
          <Tabs>
            <TabList>
              <Tab>Feature Flags</Tab>
              <Tab>UI Settings</Tab>
              <Tab>API Settings</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div style={{ display: 'flex' }}>
                  {featureFlags.map(flag => (
                    <Checkbox key={flag[0]} isChecked={flag[1]} p="3">
                      {flag[0]}
                    </Checkbox>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ToolBox>
      </Decorator>
    )
  }

  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTools />, devToolsRoot)
}

export { install }
