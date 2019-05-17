//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import Content from './Content';
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
      </div>
    );
  }

}

export default App;
