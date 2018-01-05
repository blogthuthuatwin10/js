// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqRXfBZk1h3d-aiWaKb3e38mIyUwshrmI",
  authDomain: "nguyentuan-3d955.firebaseapp.com",
  databaseURL: "https://nguyentuan-3d955.firebaseio.com",
  projectId: "nguyentuan-3d955",
  storageBucket: "nguyentuan-3d955.appspot.com",
  messagingSenderId: "227881048794"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
.then(function() {
  return messaging.getToken();
 })
.then(function(token) {
// send rest call to add to database
$.ajax('https://nguyentuan-3d955.firebaseio.com/pushtokens/'+token+'.json', {
  method: 'PUT',
  data: 'true',
  error: function(err) {
    }
  });
})
.catch(function(err) {
  console.log('Permission denied');
});