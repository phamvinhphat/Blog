import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './component/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './component/routing/ProtectedRoute';
import About from './views/About';
import Tools from './views/Tools';
import News from './views/News';
import EditUser from './views/EditUser';
import PostContextProvider from './contexts/PostContext';


function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>

      <Router>
      <Switch>
         <Route exact path='/' component={Landing}/>
         <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/> }/>
         <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/> }/>
         <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
         <ProtectedRoute exact path='/about' component={About}/>
         <ProtectedRoute exact path='/tools' component={Tools}/>
         <ProtectedRoute exact path='/news' component={News}/>
         <ProtectedRoute exact path='/edit' component={EditUser}/>
     
      </Switch>
    </Router>
      </PostContextProvider>


    
    </AuthContextProvider>
  )
}

export default App
