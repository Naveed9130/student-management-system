import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-slate-800">
        Login
      </h1>

      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;