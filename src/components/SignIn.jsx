import React from 'react';
import Input from './Input';

const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-800 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>

        <form className="space-y-2">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Input
            label="Birth Date"
            name="birthDate"
            type="date"
          />
          <Input
            label="Gender"
            name="gender"
            type="select"
            placeholder="Select your gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition duration-200 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
