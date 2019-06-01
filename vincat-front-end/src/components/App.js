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

      <div className="mx-auto">
        <NavigationBar/>
       <div className='mt-5'>
           <Content body={children}/>
           <Footer/>
       </div>

      </div>
    );
  }

}

export default App;
