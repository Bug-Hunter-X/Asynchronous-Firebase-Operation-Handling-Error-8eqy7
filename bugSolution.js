The solution involves using `.then()` to handle the asynchronous operation's result. This ensures the `console.log` executes only AFTER Firestore data is fetched.

```javascript
firebase.auth().onAuthStateChanged(user => {
if (user) {
  // Get user's data from Firestore
  db.collection('users').doc(user.uid).get().then(doc => {
    if (doc.exists) {
      console.log('User data:', doc.data());
    } else {
      console.log('No such document!');
    }
    // This line now executes AFTER Firestore data is fetched
    console.log('User is logged in!');
  }).catch(error => {
    console.error('Error getting user data:', error);
  });
}
});
```
This corrected code guarantees that all asynchronous operations are properly handled, leading to predictable and reliable behavior in the Firebase application.