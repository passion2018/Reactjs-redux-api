import React, {
  Component
} from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h3>Call Api</h3>
            <Menu />
          </header>
          <main>
            <div className="row">
              {this.showContent(routes)}
            </div>
          </main>
        </div>
      </Router>
    );
  }

  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>
  }

}

export default App;