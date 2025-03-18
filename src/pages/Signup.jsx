import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify'
import axios from "axios";

export default function SignupForm() {
    const [formData, setFormData] = useState({email: "",password: ""});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", formData);
      // Login request after signup
      const loginResponse = await axios.post("https://your-backend.com/api/token/", {
        username: formData.username,
        password: formData.password,
      });
      // Store the JWT token
      localStorage.setItem("access_token", loginResponse.data.access);
      localStorage.setItem("refresh_token", loginResponse.data.refresh);
      axios.defaults.headers.common["Authorization"] = `Bearer ${loginResponse.data.access}`;

      // Show success notification
      toast.success("Signup successful! Redirecting...", { autoClose: 2000 });

      // Redirect to homepage
      setTimeout(() => navigate("/"), 2000);

      setMessage("Signup successful! You can now log in.");

    } catch (error) {
      setMessage(error.response?.data?.error || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}
