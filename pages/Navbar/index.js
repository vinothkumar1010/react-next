import React from "react"
import { withRouter,useRouter  } from 'next/router'
import Link from 'next/link'
import { connect } from 'react-redux';
import * as LoginActions from "../../actions/LoginActions"
class Navbar extends React.Component{
    constructor(props)
    {
        super(props)
        this.logout=this.logout.bind(this);
    }
    logout()
    {
        this.props.userLogOut();
    }
    
    render()
    {
        const {userLoggedIn} =this.props;
		
        return (<nav className="nav">
            <ul>
              <li>
                  <Link href="/" ><a>Home</a></Link>
              </li>
              <li>
                    <Link href="/Cart" ><a>Cart <sup className="noOfItems">{this.props.cartItems.length}</sup></a></Link>
              </li>
              <li>
                {userLoggedIn?(<Link href="/" ><a onClick={this.logout}>Logout</a></Link>):(<Link href="/Login" ><a>Login</a></Link>)}
              </li>
              
            </ul>
          </nav>)
    }
}
const mapStateToProps = (state) => {
    return {
      userLoggedIn:state.login.isLoginSuccess,
      cartItems:state.cart.cartItems
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      userLogOut:()=>dispatch(LoginActions.logOutUser())
    };
  }
  
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar ));