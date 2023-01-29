import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Homepage from './pages/Homepage';
import Workout from './pages/Workout';
import WorkoutSummary from './pages/WorkoutSummary';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={< Homepage/>} 
            />
            <Route
              path='/Workout'
              element={< Workout/>}
            />
            <Route
              path='/WorkoutSummary'
              element={< WorkoutSummary/>}
            />
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>    
  );
}

export default App;
