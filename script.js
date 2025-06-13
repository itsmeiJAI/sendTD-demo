import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

async function sendFirebaseMessage(message) {
  try {
    await addDoc(collection(db, "messages"), {
      text: message,
      timestamp: serverTimestamp()
    });
    console.log("Message sent to Firebase successfully!");
  } catch (error) {
    console.error("Error sending to Firebase:", error);
    throw error;
  }
}

// Make function available globally
window.sendFirebaseMessage = sendFirebaseMessage;