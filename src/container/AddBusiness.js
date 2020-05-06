import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness, test } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        test: (index) => dispatch(test(index))
    }
}

export default connect(null, mapDispatchToProps)(AddBusiness)