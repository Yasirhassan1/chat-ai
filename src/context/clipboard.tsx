import { createContext, useState } from "react";

// 1. Define the interface for the context value
interface CopyContextType {
  isCopied: boolean;
  setIsCopied: (value: boolean) => void;
}

// 2. Pass the interface to createContext and set the initial values
export const CopyContext = createContext<CopyContextType>({
  isCopied: false,
  setIsCopied: () => {}, 
});

// 3. Export the provider and type the children correctly
export function CopyProvider({ children }: React.PropsWithChildren) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyContext.Provider value={{ isCopied, setIsCopied }}>
      {children}
    </CopyContext.Provider>
  );
}