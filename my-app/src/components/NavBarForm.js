import React from 'react'
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';

class NavBarForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }
    
  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
            <NavBarChild 
            isLoggedIn={this.state.isLoggedIn}
            handleButtonClick={this.handleButtonClick}
            />
        </div>
      </div>
    )
  }
}

export default NavBarForm