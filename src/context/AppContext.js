import { createContext, useEffect, useState } from 'react'

const initialState = {
    library: 'web3'
};

export const AppContext = createContext();

export const useInitialState = () => {
    const [state, setState] = useState(initialState);

    // Set library web3 as default
    useEffect(() => {
        setState({
            ...state,
            library: localStorage.getItem("web3-library") || "web3"
        });
    }, [state.library]);

    // Switch between libraries
    const switchLibrary = () => {
        if (state.library === "web3") {
            setState({
                ...state,
                library: "web3"
            });
            localStorage.setItem('web3-library', "ethers");
        } else {
            setState({
                ...state,
                library: "web3"
            });
            localStorage.setItem("web3-library", "web3");
        }
    };

    return { state, switchLibrary };
};

const AppContextProvider = ({ children }) => {
    const initial = useInitialState();
    return <AppContext.Provider value={initial}>{children}</AppContext.Provider>;
  };
  
  export default AppContextProvider;