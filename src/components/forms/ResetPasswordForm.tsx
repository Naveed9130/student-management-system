import { useState } from "react";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      password,
      confirmPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-center text-3xl font-bold">
        Reset Password
      </h1>

      <input
        type="password"
        placeholder="New Password"
        className="w-full rounded-xl border p-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full rounded-xl border p-3"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        className="w-full rounded-xl bg-blue-600 py-3 text-white"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;