import { connect } from 'react-redux'
import Listing from '../components/listing'


const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business,
    login: state.login


  }
}

export default connect(mapStateToProps)(Listing)