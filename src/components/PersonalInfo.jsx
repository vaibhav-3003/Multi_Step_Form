import React from 'react'

const PersonalInfo = ({formData,setFormData}) => {
  return (
    <div>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        className="border w-full py-1.5 px-3 rounded-md outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        placeholder="First Name..."
      />
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
        className="border w-full py-1.5 px-3 rounded-md outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        placeholder="Last Name..."
      />
      <input
        type="text"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
        className="border w-full py-1.5 px-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Username..."
      />
    </div>
  );
}

export default PersonalInfo
