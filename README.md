# One Time Password Authentication

User logs in with email and phone number, recieves a sms with token, inserts the token and logs in

# Start the app
Configure and create the firebase project on https://console.firebase.google.com connect this project with local firebase, downloaded the private keys and create a file under functions folder named service_account.json put the data in, make sure to add this file to .gitignore if you are going to save commit the proj
Deploy firebase to test.

In the project directory you run:

`firebase deploy --project [id of your firebase project]`

Runs the app in the development mode.
