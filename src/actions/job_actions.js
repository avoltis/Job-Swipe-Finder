import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';
 

import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
  } from './types';
  
// TO USE indeed you will need a workinf api key
  
//   const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
//   const JOB_QUERY_PARAMS = {
//     publisher: '4201738803816157',
//     format: 'json',
//     v: '2',
//     latlong: 1,
//     radius: 10,
//     q: 'javascript'
//   };

const JOB_ROOT_URL = 'https://authenticjobs.com/api/?';
const JOB_QUERY_PARAMS = {
  api_key:'bd30dde2e8c818a9792851aef058eeae',
  method: 'aj.jobs.search',
  perpage: '10',
  format: 'json',
};
 
  
const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS})
    return `${JOB_ROOT_URL}${query}`;
  };
   
  export const fetchJobs = (region) => async (dispatch) => {
    try {
      let zip = await Location.reverseGeocodeAsync(region);
      const url = buildJobsUrl(zip);
      console.log(url);
      let data = await fetch(url);
      dispatch({ type: FETCH_JOBS, payload: data });
      console.log(data);
    } catch(e) {
      console.error(e);
    }
  };