import React from 'react'

const Other = ({formData,setFormData}) => {
  return (
    <div>
      <input
        type="text"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
        className="border w-full py-1.5 px-3 rounded-md outline-none mb-6 focus:ring-2 focus:ring-blue-500"
        placeholder="Nationality..."
      />
      <input
        type="text"
        value={formData.other}
        onChange={(e) =>
          setFormData({ ...formData, other: e.target.value })
        }
        className="border w-full py-1.5 px-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Other..."
      />
    </div>
  );
}

export default Other
