import React from 'react';

const ProfileCard = ({ 
  name = "Gerry Pasciucco",
  title = "Head of Finance and Strategy",
  imageSrc = "/api/placeholder/400/400",
  bio = [],
  backgroundColor = "#f5f5f5"
}) => {
  return (
    <div style={{ backgroundColor }} className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-gray-100 p-8 border-b-4 border-gray-300">
          <div className="flex items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={imageSrc}
                alt={name}
                className="w-36 h-36 object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <div className="flex-1 pt-4">
              <h1 className="text-4xl font-light text-gray-900 mb-2">
                {name}
              </h1>
              <p className="text-base font-semibold text-gray-800">
                {title}
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-8 bg-white">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-sm" style={{ textAlign: 'justify' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;