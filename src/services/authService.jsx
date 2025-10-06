//signInWithEmailAndPassword
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export async function loginUser(creds) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );

    // The logged-in user info
    const user = userCredential.user;

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
      },
    };
  } catch (error) {
    console.error("Login error:", error);
    let message = "Something went wrong. Please try again.";

    switch (error.code) {
      case "auth/invalid-email":
        message = "Invalid email format.";
        break;
      case "auth/user-not-found":
      case "auth/wrong-password":
        message = "Incorrect email or password.";
        break;
      case "auth/too-many-requests":
        message = "Too many login attempts. Try again later.";
        break;
      default:
        message = error.message;
    }

    return { success: false, message };
  }
}
