import * as React from 'react'
import ReactDOM from 'react-dom'
import { FaTools } from 'react-icons/fa'

import useLocalStorageState from './hooks/useLocalStorageState'

function install() {
  function DevTools() {
    const rootRef = React.useRef()
    const [hovering, setHovering] = React.useState(false)
    const [persist, setPersist] = useLocalStorageState(
      '__bookshelf_devtools_persist__',
      false
    )
    const [tabIndex, setTabIndex] = useLocalStorageState(
      '__bookshelf_devtools_tab_index__',
      0
    )

    const show = persist || hovering
    const toggleShow = () => setPersist(v => !v)
    React.useEffect(() => {
      function updateHoverState(event) {
        setHovering(rootRef.current?.contains(event.target) ?? false)
      }
      document.body.addEventListener('mousemove', updateHoverState)
      return () =>
        document.body.removeEventListener('mousemove', updateHoverState)
    }, [])

    return (
      <div>
        <p>something</p>
      </div>
    )
  }

  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTools />, devToolsRoot)
}

export { install }
