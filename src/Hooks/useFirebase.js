import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const handelCreteAccount = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.message)
                    })
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    const handelLogin = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location.state.form || '/home'
                navigate(destination)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [auth]);


    const googleSignIn = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const destination = location.state.form || '/home'
                navigate(destination)
                setUser(result.user)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handelLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return { user, error, handelCreteAccount, handelLogin, handelLogOut, googleSignIn, isLoading }

}

export default useFirebase;