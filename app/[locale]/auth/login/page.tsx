import React from "react";
import LoginForm from "@/components/partials/auth/login-form";
import Logo from "@/components/partials/auth/logo";
import Copyright from "@/components/partials/auth/copyright";
import Social from "@/components/partials/auth/social";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/auth/pattern.svg')] opacity-10"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          {/* Logo and Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">DC</span>
            </div>
            <span className="text-white text-xl font-semibold">DashCode</span>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Unlock your Project <span className="text-blue-400">performance</span>
            </h1>
                         <p className="text-slate-300 text-lg max-w-md">
               Discover the power of modern analytics and unlock your project&apos;s full potential with our comprehensive dashboard.
             </p>
          </div>
          
          {/* Illustration */}
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
              {/* Floating Cards */}
              <div className="absolute top-4 left-4 w-16 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-mono">&lt;/&gt;</span>
              </div>
              <div className="absolute top-8 right-8 w-20 h-14 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white text-xs">JAVA</span>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white text-xs">UI</span>
              </div>
              <div className="absolute bottom-4 right-4 w-14 h-10 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white text-xs">UX</span>
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <line x1="60" y1="20" x2="320" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <line x1="60" y1="20" x2="80" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <line x1="320" y1="40" x2="340" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-slate-900 p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sign in</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Sign in to your account to start using Dashcode
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
            <LoginForm />
          </div>

          {/* Social Login */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Social locale="pt-BR" />
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
                         <p className="text-sm text-slate-600 dark:text-slate-400">
               DON&apos;T HAVE AN ACCOUNT?{" "}
               <a href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                 SIGN UP
               </a>
             </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 