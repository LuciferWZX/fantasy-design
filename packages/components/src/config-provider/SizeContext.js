import * as React from "react";
const SizeContext = React.createContext(undefined);
export const SizeContextProvider = ({ size, children }) => (React.createElement(SizeContext.Consumer, null, originSize => {
    console.log("sizes:", size, originSize);
    return (React.createElement(SizeContext.Provider, { value: size || originSize }, children));
}));
export default SizeContext;
