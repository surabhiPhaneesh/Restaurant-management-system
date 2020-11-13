import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { HomeComponent } from 'src/app/components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; 
  userid:any;

  constructor(public afs: AngularFirestore,public afAuth: AngularFireAuth,public router: Router,public ngZone: NgZone)
  {
      this.afAuth.authState.subscribe(user => {
                if (user) {
                  this.userData = user;
                  localStorage.setItem('user', JSON.stringify(this.userData));
                  JSON.parse(localStorage.getItem('user'));
                } else {
                  localStorage.setItem('user', null);
                  JSON.parse(localStorage.getItem('user'));
                }
                //console.log("local storage",localStorage.getItem('user'));
              })

  }
   // Sign in with email/password
   SignIn(email, password) {

     if(email==="internshiprestaurant@home.com" && password==="aviskar25@1999")
     {
          return this.afAuth.signInWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['admin-panel/']);
            });
            this.SetAdminData(result.user);
            console.log(result.user,"user data");
            
            
          }).catch((error) => {
            window.alert(error.message)
          })
     }
    
     else{
      return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
        
      }).catch((error) => {
        window.alert(error.message)
      })
     }
    }
    
  

  async SignUp(email, password) {
    if(email=="internshiprestaurant@home.com" && password=="aviskar25@1999")
    {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        this.SetAdminData(result.user);
        this.router.navigate['/sign-in'];
      }).catch((error) => {
        window.alert(error.message)
      })
    }
    else{
      return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
    }

    
  }
  //verify email
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }
  // SendVerificationMail() {
  //   return this.afAuth.currentUser.sendEmailVerification()
  //   .then(() => {
  //     this.router.navigate(['verify-email-address']);
  //   })
  // }


  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      
      
        return (user !== null && user.emailVerified !== false) ? true : false;
      
      // return (user !== null && user.emailVerified !== false) ? true : false;
    }

     // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

    // Auth logic to run auth providers
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
   
    
   
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(userData, {
        merge: true
      })
    
  }

  SignOut() {
    console.log("log out called");
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    })
  }

  SetAdminData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    // console.log("inside admin data");
    
   
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified:true
      }
      // console.log("emailverifi ",userData);
      return userRef.set(userData, {
        merge: true
      })
}

get isAdminLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user==null)
  {
    this.router.navigate['home'];
  }
  else{
    return (user !== null && user.uid==="E6pJBT6TLkSvViMKIRoDyqgcYbM2" && user.email==="internshiprestaurant@home.com") ? true : false;
  }
  
  
  
  // return (user !== null && user.emailVerified !== false) ? true : false;
}
}
