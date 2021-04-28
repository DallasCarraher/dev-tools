import * as React from 'react'
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'
import { oneOfType, arrayOf, node } from 'prop-types'

export default function Decorator({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      {children}
    </ChakraProvider>
  )
}

Decorator.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
}
