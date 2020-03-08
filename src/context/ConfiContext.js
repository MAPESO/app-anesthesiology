// Packages
import { createContext } from 'react';

const ConfiContext = createContext({});
const ConfiProvider = ConfiContext.Provider;
const ConfiConsumer = ConfiContext.Consumer;

export { ConfiProvider, ConfiConsumer, ConfiContext };
