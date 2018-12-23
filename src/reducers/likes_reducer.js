import _ from 'lodash';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {

        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'id');

        case CLEAR_LIKED_JOBS:
            console.log("clear reducer")
            return [];

        default:
            return state;
    }
}