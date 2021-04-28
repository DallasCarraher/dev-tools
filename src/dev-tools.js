import * as React from 'react'
import ReactDOM from 'react-dom'
import { FaTools } from 'react-icons/fa'
import { Box, Button, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Decorator from './Decorator'
import useLocalStorageState from './hooks/useLocalStorageState'

const ToolBox = styled(Box)`
  position: fixed;
  bottom: ${({ bottom }) => bottom}px;
  /* opacity: 80%; */
  background-color: rgba(255, 255, 255, 0.08);
  /* box-sizing: content-box; */
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
    const rootRef = React.useRef()
    const [persist, setPersist] = useLocalStorageState(
      '__devtools_persist__',
      false
    )

    const toggleShow = () => setPersist(v => !v)

    const style = persist ? '0' : '-200'
    const text = persist ? 'close' : 'dev-tools'

    return (
      <Decorator>
        <ToolBox w="100%" h="200px" bottom={style}>
          <ToggleBox leftIcon={<FaTools />} onClick={toggleShow}>
            {text}
          </ToggleBox>
          <Text fontSize="4xl" p="2">
            Dallas's Dev Tools
          </Text>
        </ToolBox>
      </Decorator>
    )
  }

  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTools />, devToolsRoot)
}

export { install }
