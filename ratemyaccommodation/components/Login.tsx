import Link from 'next/link'
import React from "react";
import FirebaseAuth from "../components/auth/FirebaseAuth"

export default function Login() {
  return (
    <>
      <div className="flex bg-uniLogin bg-cover h-screen w-screen mx-auto items-center justify-center ">
        <div className="bg-white max-w-xl max-w-md w-full rounded-2xl space-y-8 py-12 mx-4 px-4 sm:px-6 lg:px-8">
          <div>
            <img
              className="mx-auto h-12 w-auto bg-gray-700 rounded-md"
              src="Logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link href="/register">
                register here for an account
                </Link>
              </a>
            </p>
          </div>
          <FirebaseAuth />
        </div>
      </div>
    </>
  )
}