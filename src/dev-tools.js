import * as React from 'react';
import ReactDOM from 'react-dom';
import { FaTools } from 'react-icons/fa';

function install() {
  function DevTools() {
    const rootRef = React.useRef();
    const [hovering, setHovering] = React.useState(false);
    const [persist, setPersist] = useLocalStorageState(
      '__bookshelf_devtools_persist__',
      false
    );
    const [tabIndex, setTabIndex] = useLocalStorageState(
      '__bookshelf_devtools_tab_index__',
      0
    );
  }
}
