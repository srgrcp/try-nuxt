import firebase from "firebase/app"

export const startFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDPCUynDXz6oaUv8ZdhaVahx3zk45dcwYE",
        authDomain: "srg-demo-bc001.firebaseapp.com",
        projectId: "srg-demo-bc001",
        storageBucket: "srg-demo-bc001.appspot.com",
        messagingSenderId: "376022666674",
        appId: "1:376022666674:web:5507ec3fa3f734aa5f68ab"
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    } else {
        firebase.app()
    }
}
