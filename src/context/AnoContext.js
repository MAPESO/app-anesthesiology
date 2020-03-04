// Packages
import { createContext } from 'react';

const AnoContext = createContext({});
const AnoProvider = AnoContext.Provider;
const AnoConsumer = AnoContext.Consumer;

export { AnoProvider, AnoConsumer, AnoContext };
