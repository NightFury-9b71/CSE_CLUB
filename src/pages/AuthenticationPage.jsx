import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, IdCard, Facebook, Twitter, Github } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// SOLID: Single Responsibility Principle - Components are divided by their specific responsibilities

// UI Components with single responsibilities
const Logo = () => (
//     <div className="flex justify-center mb-6">
//     <div className="relative w-20 h-20">
//       <div className="absolute inset-0 bg-blue-600 rounded-lg animate-pulse"></div>
//       <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
//         <code className="font-mono text-blue-800 font-bold text-xl">&lt;/&gt;</code>
//       </div>
//       <div className="absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">CSE</div>
//     </div>
//   </div>
<DotLottieReact
      src="https://lottie.host/7d99f5f9-4b73-45b9-8d22-ff2aa28349ae/OosW5WOxmS.lottie"
      loop
      autoplay
    />
);


  

// Card Component - Responsible only for layout wrapper
const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 ${className}`}>
    {children}
  </div>
);

// Form Header - Responsible only for title sections
const FormHeader = ({ title, subtitle }) => (
  <div className="mb-6 text-center">
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    {subtitle && <p className="text-gray-600 mt-1 text-sm">{subtitle}</p>}
  </div>
);

// Input Field - Responsible only for rendering form inputs
const FormInput = ({ label, type = "text", id, value, onChange, error, icon, endAdornment }) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;
    
    return (
      <div className="mb-4">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
              {icon}
            </div>
          )}
          
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? "" : label}
            className={`w-full px-3 py-2 ${icon ? 'pl-10' : ''} border-2 rounded-lg text-gray-700
              ${error ? 'border-red-300 focus:border-red-500' :
                isFocused ? 'border-indigo-400 focus:border-indigo-500' : 'border-gray-200'}
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              ${error ? 'focus:ring-red-200' : 'focus:ring-indigo-200'}
              transition-all duration-200`}
          />
          
          <label
            htmlFor={id}
            className={`absolute left-3 ${icon ? 'left-10' : 'left-3'} transition-all duration-200
              ${(isFocused || hasValue) 
                ? '-top-2 text-xs bg-white px-1 z-10 font-medium ' + (error ? 'text-red-500' : 'text-indigo-500') 
                : 'top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'}
            `}
          >
            {(isFocused || hasValue) && label}
          </label>
          
          {endAdornment && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              {endAdornment}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  };
// Button - Responsible only for button UI
const Button = ({ type = "button", onClick, disabled, className = "", isLoading, children, variant = "primary", fullWidth = false }) => {
  const baseClasses = "py-2 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : children}
    </button>
  );
};

// Divider - Responsible for visual separation
const Divider = ({ text }) => (
  <div className="relative my-6">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-200"></div>
    </div>
    {text && (
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">{text}</span>
      </div>
    )}
  </div>
);

// Social Login Buttons
const SocialLoginButton = ({ icon, onClick, label }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="flex-1 flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {icon}
  </button>
);

// Form Step Indicator - For multi-step forms
const StepIndicator = ({ currentStep, totalSteps, labels = [] }) => (
  <div className="mb-6">
    <div className="flex items-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`rounded-full flex items-center justify-center w-8 h-8 ${
            currentStep > index ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className={`h-1 flex-1 mx-2 ${currentStep > index + 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
    {labels.length > 0 && (
      <div className="flex justify-between mt-2">
        {labels.map((label, index) => (
          <span key={index} className="text-xs text-gray-500">{label}</span>
        ))}
      </div>
    )}
  </div>
);

// SOLID: Open-Closed Principle - Login Form can be extended without modification
const LoginForm = ({ onLogin, onSwitchToSignup, isLoading }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData);
    }
  };

  return (
    <Card>
      <FormHeader 
        title="Welcome Back" 
        subtitle="Sign in to access your CS Club account"
      />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email Address"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={<Mail size={18} />}
        />
        
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={<Lock size={18} />}
          endAdornment={
            showPassword ? 
              <EyeOff size={18} onClick={togglePasswordVisibility} /> : 
              <Eye size={18} onClick={togglePasswordVisibility} />
          }
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors" href="#">
            Forgot password?
          </a>
        </div>
        
        <Button 
          type="submit" 
          variant="primary"
          fullWidth
          isLoading={isLoading}
        >
          Sign In
        </Button>
        
        <Divider text="Or continue with" />
        
        <div className="grid grid-cols-3 gap-3">
          <SocialLoginButton icon={<Facebook size={20} />} label="Sign in with Facebook" />
          <SocialLoginButton icon={<Twitter size={20} />} label="Sign in with Twitter" />
          <SocialLoginButton icon={<Github size={20} />} label="Sign in with GitHub" />
        </div>
        
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Sign Up
            </button>
          </span>
        </div>
      </form>
    </Card>
  );
};

// SOLID: Open-Closed Principle - Signup Form can be extended without modification
const SignupForm = ({ onSignup, onSwitchToLogin, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: ''
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.studentId) newErrors.studentId = 'Student ID is required';
    if (!agreeToTerms) newErrors.terms = 'You must agree to the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      onSignup(formData);
    }
  };

  return (
    <Card>
      <FormHeader 
        title="Create an Account" 
        subtitle="Join the CS Club community"
      />
      
      <StepIndicator 
        currentStep={step}
        totalSteps={2}
        labels={["Personal Info", "Security Details"]}
      />
      
      <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <FormInput
              label="Full Name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              icon={<User size={18} />}
            />
            
            <FormInput
              label="Email Address"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              icon={<Mail size={18} />}
            />
            
            <Button 
              type="submit" 
              variant="primary"
              fullWidth
            >
              Continue
            </Button>
          </>
        ) : (
          <>
            <FormInput
              label="Student ID"
              type="text"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              error={errors.studentId}
              icon={<IdCard size={18} />}
            />
            
            <FormInput
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={<Lock size={18} />}
              endAdornment={
                showPassword ? 
                  <EyeOff size={18} onClick={togglePasswordVisibility} /> : 
                  <Eye size={18} onClick={togglePasswordVisibility} />
              }
            />
            
            <FormInput
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              icon={<Lock size={18} />}
              endAdornment={
                showConfirmPassword ? 
                  <EyeOff size={18} onClick={toggleConfirmPasswordVisibility} /> : 
                  <Eye size={18} onClick={toggleConfirmPasswordVisibility} />
              }
            />
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                  Terms and Conditions
                </a>
              </label>
            </div>
            {errors.terms && <p className="text-sm text-red-500 -mt-1">{errors.terms}</p>}
            
            <div className="flex space-x-3 pt-2">
              <Button 
                type="button" 
                variant="secondary"
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              
              <Button 
                type="submit" 
                variant="primary"
                isLoading={isLoading}
                className="flex-1"
              >
                Create Account
              </Button>
            </div>
          </>
        )}
        
        {step === 1 && (
          <>
            <Divider text="Or sign up with" />
            
            <div className="grid grid-cols-3 gap-3">
              <SocialLoginButton icon={<Facebook size={20} />} label="Sign up with Facebook" />
              <SocialLoginButton icon={<Twitter size={20} />} label="Sign up with Twitter" />
              <SocialLoginButton icon={<Github size={20} />} label="Sign up with GitHub" />
            </div>
          </>
        )}
        
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Sign In
            </button>
          </span>
        </div>
      </form>
    </Card>
  );
};

// Success Component
const SuccessView = ({ user, onLogout }) => (
  <Card className="max-w-md w-full mx-auto">
    <div className="text-center mb-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}!</h2>
      <p className="text-gray-600 mt-1">Your account has been successfully created.</p>
    </div>
    
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
      <h3 className="font-medium text-gray-800 mb-3">Account Details</h3>
      <ul className="text-sm space-y-3">
        <li className="flex justify-between">
          <span className="text-gray-500">Name:</span>
          <span className="font-medium">{user.name}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Email:</span>
          <span className="font-medium">{user.email}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Role:</span>
          <span className="font-medium">{user.role}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Joined:</span>
          <span className="font-medium">{user.joinDate}</span>
        </li>
      </ul>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-6">
      <Button
        variant="secondary"
        fullWidth
        onClick={() => window.location.href = "/dashboard"}
      >
        Go to Dashboard
      </Button>
      <Button
        variant="primary"
        fullWidth
        onClick={() => window.location.href = "/events"}
      >
        Explore Events
      </Button>
    </div>
    
    <div className="text-center">
      <button
        onClick={onLogout}
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Sign Out
      </button>
    </div>
  </Card>
);

// SOLID: Dependency Inversion Principle - High-level modules not dependent on low-level modules
// AuthService abstraction for authentication logic
const useAuthService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const login = async (data) => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, always succeed with mock data
      setUser({
        name: 'Demo User',
        email: data.email,
        role: 'Student Member',
        joinDate: new Date().toLocaleDateString()
      });
      return true;
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, always succeed with mock data
      setUser({
        name: data.name,
        email: data.email,
        role: 'New Member',
        joinDate: new Date().toLocaleDateString()
      });
      return true;
    } catch (err) {
      setError('There was an error creating your account. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    setError
  };
};

// Main Component
const CSClubAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { user, loading, error, login, signup, logout } = useAuthService();
  
  // Handle form submission
  const handleLogin = (data) => {
    login(data);
  };

  const handleSignup = (data) => {
    signup(data);
  };

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Render appropriate view based on auth state
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <SuccessView user={user} onLogout={logout} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <Logo />
        
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded text-sm text-red-700">
            {error}
          </div>
        )}
        
        {isLogin ? (
          <LoginForm 
            onLogin={handleLogin} 
            onSwitchToSignup={toggleForm}
            isLoading={loading}
          />
        ) : (
          <SignupForm 
            onSignup={handleSignup} 
            onSwitchToLogin={toggleForm}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default CSClubAuth;