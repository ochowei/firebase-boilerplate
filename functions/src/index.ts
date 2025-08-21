import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

/**
 * Trigger for when a new user is created.
 * Creates a corresponding user profile document in Firestore.
 */
export const createUserProfile = functions.auth.user().onCreate((user) => {
  const { uid, email, displayName, photoURL } = user;

  // Data to be saved in the new user's profile document
  const userProfile = {
    email,
    displayName: displayName || null,
    photoURL: photoURL || null,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  // Create the document in the 'users' collection
  return db.collection("users").doc(uid).set(userProfile)
    .then(() => {
      functions.logger.info(`Successfully created profile for user: ${uid}`);
      return null;
    })
    .catch((error) => {
      functions.logger.error(`Error creating user profile for ${uid}:`, error);
      // Re-throwing the error is important for visibility in Firebase logs
      throw new functions.https.HttpsError("internal", "Could not create user profile.");
    });
});
