import { connect } from 'react-redux'
import Listing from '../components/listing'


const mapStateToProps = (state) => {
  return {
    user: state.user,
    shop: state.shop, 
    login: state.login


  }
}

export default connect(mapStateToProps)(Listing)