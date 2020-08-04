import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Posts from '../posts/Posts';
import Post from '../post/Post';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/profile/:id' component={Profile} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/create-profile' component={CreateProfile} />
        <PrivateRoute path='/edit-profile' component={EditProfile} />
        <PrivateRoute path='/add-experience' component={AddExperience} />
        <PrivateRoute path='/add-education' component={AddEducation} />
        <PrivateRoute path='/posts' component={Posts} />
        <PrivateRoute path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
