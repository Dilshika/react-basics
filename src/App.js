import Navbar from './Navbar';
import Home from './Home';
import Create from './new-blog/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './blog-details/BlogDetails';
import NotFound from './notFound/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path ='/create'>
              <Create />
            </Route>
            <Route path ='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route  path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
