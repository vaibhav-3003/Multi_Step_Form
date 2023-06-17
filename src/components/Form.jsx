import React, { useState } from 'react'
import SignUp from './SignUp'
import PersonalInfo from './PersonalInfo'
import Other from './Other'

const Form = ({page}) => {
    const [formData,setFormData] = useState({
        "email" : "",
        "password" : "",
        "confirmPassword" : "",
        "lastName" : "",
        "username" : "",
        "nationality":"",
        "other":"",
    });
  return (
    <div className="w-full flex flex-col justify-center items-center p-3">
      {page === 0 ? (
        <SignUp formData={formData} setFormData={setFormData} />
      ) : page === 1 ? (
        <PersonalInfo formData={formData} setFormData={setFormData} />
      ) : (
        <Other formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}

export default Form
