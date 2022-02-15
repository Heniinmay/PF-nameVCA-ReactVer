import React, { createContext, useRef } from 'react';

const RefContext = createContext();

export const RefContextProvider = ({children}) => {

    const collectionRef = useRef(null); // 여기서 같이 사용할 변수 선언 , Collection.js에 쓸거야
    
    return (
        <RefContext.Provider value={{ collectionRef }}>
            {children}
        </RefContext.Provider>
    );
};

export default RefContext;