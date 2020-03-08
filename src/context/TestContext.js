// Packages
import { createContext } from 'react';

const TestContext = createContext({});
const TestProvider = TestContext.Provider;
const TestConsumer = TestContext.Consumer;

export { TestProvider, TestConsumer, TestContext };
