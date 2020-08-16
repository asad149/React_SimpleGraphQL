import React from "react";
import "./App.css";
import client from "./config/gpq_config";
import Students from './Components/Students'

import { ApolloProvider } from '@apollo/client';


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>My First GraphQL</h1>
      <Students/>
    </div>
    </ApolloProvider>
  );
}

export default App;
