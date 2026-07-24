import { useState } from "react";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      fullName,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-center text-3xl font-bold">
        Register
      </h1>

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full rounded-xl bg-blue-600 py-3 text-white"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;