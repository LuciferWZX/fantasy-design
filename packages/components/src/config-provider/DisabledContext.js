import * as React from "react";
const DisabledContext = React.createContext(false);
export const DisabledContextProvider = ({ disabled, children }) => {
    const originDisabled = React.useContext(DisabledContext);
    return (React.createElement(DisabledContext.Provider, { value: disabled || originDisabled }, children));
};
export default DisabledContext;
