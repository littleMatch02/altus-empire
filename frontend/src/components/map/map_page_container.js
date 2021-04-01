import { connect } from 'react-redux';
import MapPage from './map_page';
import { fetchDispensaries, fetchSearchByNameDispensary } from '../../actions/dispensary_actions';
import { clearSearchResults, storeSearchKeyWord } from "../../actions/search_action"

const mSTP = state => ({
    dispensaries: state.entities.dispensaries
});

const mDTP = dispatch => ({
    fetchDispensaries: () => dispatch(fetchDispensaries()),
    fetchSearchByNameDispensary: (query) => dispatch(fetchSearchByNameDispensary(query)),
    storeKeyWord: (keyword) => dispatch(storeSearchKeyWord(keyword)),
    clearSearchResults: () => dispatch(clearSearchResults())
})

export default connect(mSTP, mDTP)(MapPage);