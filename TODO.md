# TODO List

This file tracks planned features, enhancements, and bug fixes for the project.

## High Priority
- [ ] **Password Reset:** Implement a "Forgot Password" flow using the Firebase SDK. This involves creating a UI and calling the `sendPasswordResetEmail` function.
- [ ] **User Profile Editing:** Allow users to update their profile information (e.g., display name) from the dashboard. This will require adding a form and updating the Firestore security rules.

## Medium Priority
- [ ] **Third-Party Authentication (OAuth):** Add support for signing in with Google, GitHub, or other social providers. This can be configured in the Firebase Console and FirebaseUI.
- [ ] **UI/UX Refinements:** Improve the visual design of the login and dashboard pages. Add loading indicators and better error handling for a smoother user experience.
- [ ] **Add Unit Tests:** Write unit tests for the `createUserProfile` Cloud Function to ensure its reliability.

## Low Priority
- [ ] **User Profile Picture:** Allow users to upload a profile picture. This is a larger task that involves:
  - Setting up Firebase Storage.
  - Updating Firestore rules for Storage.
  - Building a file upload interface on the frontend.
- [ ] **Admin Roles & Dashboard:** Introduce an "admin" user role. This would require:
  - A mechanism to assign admin roles (e.g., a custom Cloud Function).
  - More complex Firestore rules to grant admins wider access.
  - A separate admin dashboard to view/manage users.
