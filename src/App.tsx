import { AuthLayout } from "./_auth/AuthLayout";
import { SignInForm } from "./_auth/forms/SignInForm";
import { SignUpForm } from "./_auth/forms/SignUpForm";
import { RootLayout } from "./_root/RootLayout";
import { HomePage } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="flex min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
