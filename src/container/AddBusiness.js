import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (shop) => dispatch(addBusiness(shop)),
        
    }
}

export default connect(null, mapDispatchToProps)(AddBusiness)