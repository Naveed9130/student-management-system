import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-center text-3xl font-bold">
        Forgot Password
      </h1>

      <p className="text-center text-gray-500">
        Enter your registered email.
      </p>

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border p-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="w-full rounded-xl bg-blue-600 py-3 text-white"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;