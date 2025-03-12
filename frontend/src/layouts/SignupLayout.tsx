
import Footer from '@components/Footer'
import { Outlet, useLocation } from 'react-router';

function SignupLayout() {
  
  const location = useLocation();

  const steps = [
    { path: '/signup', label: 'Sign Up' },
    { path: '/connect', label: 'Connect to Third Party API' },
    { path: '/select', label: 'Select Google Calendars' },
    { path: '/verify', label: 'Verify Notion Setup' },
  ];

  const currentStep = steps.findIndex((step) => step.path === location.pathname);

  return (
    <>
    {/* Step Progress */}
    <ul className="steps m-auto justify-center gap-4 mt-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step transition-all duration-300 ease-in-out ${
              index <= currentStep ? 'step-primary' : 'opacity-50'
            } ${index === currentStep ? 'bg-gradient-to-r from-primary-500 to-primary-300' : ''}`} 
          >
            {step.label}
          </li>
        ))}
      </ul>

      {/* Hero */}
      <div className="flex flex-grow flex-col items-center m-auto justify-center">
        <div className="hero bg-base-100 rounded-2xl shadow-md border border-base-300 b-2">
          <div className="hero-content flex-row-reverse">
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignupLayout;


