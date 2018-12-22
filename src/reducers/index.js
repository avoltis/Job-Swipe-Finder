import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likeJobs from './likes_reducer';

export default combineReducers({
    auth: auth,
    jobs: jobs,
    likedJobs: likeJobs
});