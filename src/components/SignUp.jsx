import React from 'react'

const SignUp = ({formData,setFormData}) => {
  return (
    <div>
      <input
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border w-full py-1.5 px-3 rounded-md outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        placeholder="Email..."
      />
      <input
        type="text"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="border w-full py-1.5 px-3 rounded-md outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        placeholder="Password..."
      />
      <input
        type="text"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        className="border w-full py-1.5 px-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Confirm Password..."
      />
    </div>
  );
}

export default SignUp
