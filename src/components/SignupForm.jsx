const SignupForm = () => {
  return (
    <section className="bg-teal-800 w-[700px] h-[900px] flex items-center justify-center">
      <div className="bg-white w-[500px] h-[700px] p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Signup Form</h2>

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          className="block w-full border p-2 mb-8"
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="block w-full border p-2 mb-8"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="block w-full border p-2 mb-8"
        />

        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          className="block w-full border p-2 mb-8"
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          className="block w-full border p-2 mb-8"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-600 transition duration-200 hover:scale-105 shadow-md cursor-pointer">
          Submit
        </button>
      </div>
    </section>
  );
};

export default SignupForm;
