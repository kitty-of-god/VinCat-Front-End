//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import Content from './Content';
import Footer from './Footer';

//Component class
class App extends React.Component{
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render()
  {
    const {children} = this.props;
    return (
      <div>
        <NavigationBar/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
