import React from 'react';

const ReactContext = React.createContext({
    tempArr: [],
    addBooks: () => {},
    removeBooks: () => {}
})

export default ReactContext;