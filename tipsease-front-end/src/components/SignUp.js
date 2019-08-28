import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";



// export default function SignUp(){
//     return(
//             <form>
//                     <input
//                         fluid label="First Name"
//                         placeholder="First Name"
//                     />
//                     <input
//                         fluid label="Last Name"
//                         placeholder="Last Name"
//                     />

//                 <button type="submit">Sign Up</button>
//             </form>

//     )
// }

const SignUpForm = () => {
    return(
        <div>
            <Form>
                <Field
                component="input"
                type="text"
                name="fullname"
                placeholder="Fullname"
                />
            </Form>
        </div>
    )

}

const formikHOC = withFormik({
    mapPropsToValues({ fullname }) {
        return {
            fullname: fullname || "",
        }
    }
})

const SignUpFormWithFormik = formikHOC(SignUpForm);

export default SignUpFormWithFormik;