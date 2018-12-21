import axios from 'axios';
import { FETCH_JOBS } from './types';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format:  'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

export const fetchJobs = () => async dispatch => {
    try {
        let zip = await reverseGeocode(region);

    } catch (error) {
        console.log(error);
    }

};