import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider"
import Fields from "./ui/Fields"
import Header from "./ui/Header"
import theme from "./ui/Theme"
import TaskGroups from "./ui/TaskGroups"
import SubHeader from "./ui/SubHeader"
import TeamTasks from "./ui/TeamTasks"
import { GlobalContext } from '../context/GlobalContext';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';



function App() {
  const [count, setCount] = useState(0);
  const [filterValue, setFilterValue] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const value = { count, setCount, filterValue, setFilterValue, selectedRows, setSelectedRows }
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000'
    }),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalContext.Provider value={value}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Router>
              <Header />
              <Divider />
              <Fields />
              <Divider />
              <SubHeader />
              <Switch>
                <Route exact path="/">
                  <TaskGroups />
                </Route>
                <Route exact path="/team">
                  <TeamTasks />
                </Route>
                <Route exact path="/jobs" component={() => <div>Jobs</div>} />
                <Route
                  exact
                  path="/management"
                  component={() => <div>Team Management</div>}
                />
              </Switch>
            </Router>
            {/* <TaskGroups /> */}
          </ThemeProvider>
        </StyledEngineProvider>
      </GlobalContext.Provider>
    </ApolloProvider>
  );
}

export default App
