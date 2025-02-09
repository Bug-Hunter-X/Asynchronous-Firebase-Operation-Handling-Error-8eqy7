The following Firebase code snippet demonstrates a common error: asynchronous operations not handled correctly.

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
  }).catch(error => {
    console.error('Error getting user data:', error);
  });
  // This line executes BEFORE Firestore data is fetched
  console.log('User is logged in!');
}
});
```

The problem lies in the asynchronous nature of `db.collection().get()`. The `console.log('User is logged in!');` runs before the Firestore call completes, leading to unexpected behavior.