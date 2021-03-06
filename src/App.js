import './App.css';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
import CalendarComponent from './components/CalendarComponent';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route exact path="/">
            <CustomerList/>
          </Route>
          <Route path="/traininglist">
            <TrainingList/>
          </Route>
          <Route path ="/calendar">
            <CalendarComponent/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
