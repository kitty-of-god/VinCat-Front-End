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
      <React.Fragment>
      <div style={{minHeight:"calc(100vh - 70px)"}}>
          <NavigationBar/>
         <div className='mt-5'>
             <Content body={children}/>
         </div>
       </div>
       <Footer/>
      </React.Fragment>
    );
  }

}

export default App;
