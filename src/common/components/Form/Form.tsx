import React from 'react';

const Form = () => {
  return (
    <div className="w-full">
      <form>
        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md text-sm sm:text-lg focus:outline-none border-slate-300 focus:border-blue-500"
          />
        </div>

        {/* Or Divider */}
        <div className="text-center text-gray-500 mb-6">Or</div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm sm:text-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-primary  text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-secondary/95 focus:outline-none"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
