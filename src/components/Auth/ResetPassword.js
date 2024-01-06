// ResetPassword.js

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { sendPasswordResetEmail } from 'src/utils/utils'

const crypto = require('crypto'); // Import the crypto library

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ResetPassword = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function resetPassword(formData) {
    const { email } = formData;

    // Generate a unique token for password reset using crypto
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Save the resetToken to a secure place (e.g., Supabase table)

    // Compose the password reset link
    const resetLink = `${window.location.origin}/auth/update-password?token=${resetToken}`;

    try {
      // Send the password reset email using the utility function
      await sendPasswordResetEmail(email, resetLink);

      // Show success message
      setSuccessMsg('Password reset instructions sent. Check your email.');
    } catch (error) {
      // Handle error
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="card">
      <h2 className="w-full text-center">Forgot Password</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={resetPassword}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <label htmlFor="email">Email</label>
            <Field
              className={cn('input', errors.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}
            <button className="button-inverse w-full" type="submit">
              Send Instructions
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-center text-red-600">{errorMsg}</div>}
      {successMsg && <div className="text-center text-black">{successMsg}</div>}
      <Link href="/sign-in" className="link">
        Remember your password? Sign In.
      </Link>
    </div>
  );
};

export default ResetPassword;
