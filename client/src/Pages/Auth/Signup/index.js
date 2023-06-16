import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import styles from './styles.module.css'
import validations from './validations'
import { signup } from '../../../services/authservice';

const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn, navigate ])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrors(validations(currentUser, users));
  
    try {
      await signup(
        currentUser.firstName,
        currentUser.lastName,
        currentUser.email,
        currentUser.password
      );
      console.log('Signup successful');
      
      setIsSubmitting(true);
    } catch (error) {
      console.error(error);
      // Handle the error, display error message, etc.
    }
  }

   

  return (
    <div className={styles.formGroupContainer}>
      <div className={styles.formGroup}>
        <div>
          <h2 className={styles.title}>Sign Up</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
          className={styles.signUpForm}
        >
          <div className={styles.inputGroup}>
            <div>
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              <label className="sr-only">First Name</label>
              <input
                type="text"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
              
            </div>

            <div>
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              <label className="sr-only">Last Name</label>
              <input
                type="text"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>
            <div>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
              <label className="sr-only">Email</label>
              <input
                type="email"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <span className={styles.error}>{errors.password}</span>}
              <label className="sr-only">Password</label>
              <input
                type="Password"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <span className={styles.error}>{errors.passwordConfirm}</span>}
              <label className="sr-only">Password Confirm</label>
              <input
                type="Password"
                className={styles.input}
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
              />
              
            </div>
            <div className={styles.linkBox}>
              <div className={styles.linkDiv}>
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" className="text-yellow-400 hover:underline">
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={styles.button}>
                <IdentificationIcon
                  className="my-auto h-5 w-6"
                  aria1-hidden="true"
                />
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup




// =========================


// import { IdentificationIcon } from '@heroicons/react/outline'
// import { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../../Context/AuthContext'
// import styles from './styles.module.css'
// import validations from './validations'


// const Signup = () => {
//   const {
//     currentUser,
//     setCurrentUser,
//     loggedIn,
//     errors,
//     setErrors,
//     setIsSubmitting
//   } = useAuth()

//   const navigate = useNavigate()

//   useEffect(() => {
//     loggedIn && navigate('/')
//   }, [loggedIn,navigate ])

//   const handleSignUpFormChange = (e) => {
//     setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
//   }

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault()
//     setErrors(validations(currentUser))

//     try {
//       const  item ={ email, firstName, lastName, password } = currentUser;


//       console.log(item)
    
//       let response = await fetch('http://localhost:8000/api/signup',{
//         method: 'POST',
//         body: JSON.stringify(item),
//         hearders:{
//          "Content-Type":'application/json',
//          "Accept":"application/json"


//         }
//       })
//       const data = await response.json()
//       console.log(data)
//       console.log('Signup successful')
      
//       // Handle the response as needed
//       // Perform actions based on the response, such as redirecting or displaying success message
//     } catch (error) {
//       console.error(error)
//       // Handle the error, display error message, etc.
//     }

//     setIsSubmitting(true)
//   }

//   return (
//     <div className={styles.formGroupContainer}>
//       <div className={styles.formGroup}>
//         <div>
//           <h2 className={styles.title}>Sign Up</h2>
//         </div>
//         <form autoComplete="off" onSubmit={handleSignUpSubmit} className={styles.signUpForm}>
//           <div className={styles.inputGroup}>
//             <div>
//               {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
//               <label className="sr-only">First Name</label>
//               <input
//                 type="text"
//                 className={styles.input}
//                 onChange={handleSignUpFormChange}
//                 value={currentUser.firstName}
//                 name="firstName"
//                 placeholder="First Name"
//               />
//             </div>

//             <div>
//               {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
//               <label className="sr-only">Last Name</label>
//               <input
//                 type="text"
//                 className={styles.input}
//                 onChange={handleSignUpFormChange}
//                 value={currentUser.lastName}
//                 name="lastName"
//                 placeholder="Last Name"
//               />
//             </div>
//             <div>
//               {errors.email && <span className={styles.error}>{errors.email}</span>}
//               <label className="sr-only">Email</label>
//               <input
//                 type="email"
//                 className={styles.input}
//                 onChange={handleSignUpFormChange}
//                 value={currentUser.email}
//                 name="email"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div>
//               {errors.password && <span className={styles.error}>{errors.password}</span>}
//               <label className="sr-only">Password</label>
//               <input
//                 type="password"
//                 className={styles.input}
//                 onChange={handleSignUpFormChange}
//                 value={currentUser.password}
//                 name="password"
//                 placeholder="Password"
//               />
//             </div>
//             <div>
//               {errors.passwordConfirm && <span className={styles.error}>{errors.passwordConfirm}</span>}
//               <label className="sr-only">Password Confirm</label>
//               <input
//                 type="password"
//                 className={styles.input}
//                 onChange={handleSignUpFormChange}
//                 value={currentUser.passwordConfirm}
//                 name="passwordConfirm"
//                 placeholder="Password Confirm"
//               />
//             </div>
//             <div className={styles.linkBox}>
//               <div className={styles.linkDiv}>
//                 <span>
//                   Already have an account? Login{" "}
//                   <Link to="/signin" className="text-yellow-400 hover:underline">
//                     here.
//                   </Link>
//                 </span>
//               </div>
//             </div>
//             <div className="text-center">
//               <button type="submit" className={styles.button}>
//                 <IdentificationIcon className="my-auto h-5 w-6" aria-hidden="true" />
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
// -------------------------------



    // localStorage.setItem('user', JSON.stringify(currentUser))
    // localStorage.setItem('users', JSON.stringify(users))
  
  // const handleSignUpSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrors(validations(currentUser, users));
  //   setIsSubmitting(true);
  
  //   try {
  //     const response = await axios.post('/signup', currentUser); // Assuming the backend is running on the same domain
  //     console.log(response.data); // Handle the response as needed
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error
  //   }
  
  //   localStorage.setItem('user', JSON.stringify(currentUser));
  //   localStorage.setItem('users', JSON.stringify(users));
  // };
  