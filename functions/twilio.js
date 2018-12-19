const twilio = require('twilio');

const accountSid = ''; //get account sid from twilio website
const authToken = ''; //get authtoken from twilio website

module.exports = new twilio.Twilio(accountSid, authToken);