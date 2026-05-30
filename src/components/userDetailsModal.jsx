import React from 'react';

function UserDetailsModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">User Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full transition-colors text-lg"
          >
            &#x2715;
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-4">
           <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
             <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-3xl">
               {user.name.charAt(0)}
             </div>
             <div>
               <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
               <p className="text-indigo-600 font-medium">@{user.username}</p>
             </div>
           </div>

           <div className="text-sm text-gray-600 flex flex-col gap-3">
             <p className="flex items-center gap-2">
                 <span className="font-semibold text-gray-700 w-16">Email:</span> {user.email}
             </p>
             <p className="flex items-center gap-2">
                 <span className="font-semibold text-gray-700 w-16">Phone:</span> {user.phone}
             </p>
             <p className="flex items-center gap-2">
                 <span className="font-semibold text-gray-700 w-16">Website:</span> 
                 <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">
                     {user.website}
                 </a>
             </p>
             
             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-2">
                 <h4 className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Address</h4>
                 <div className="t flex flex-col gap-1">
                     <p>{user.address?.suite}, {user.address?.street}</p>
                     <p>{user.address?.city}, {user.address?.zipcode}</p>
                 </div>
             </div>

             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-2">
                 <h4 className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Company</h4>
                 <div className="flex flex-col gap-1">
                     <p className="font-semibold text-gray-700">{user.company?.name}</p>
                     <p className="italic text-xs text-gray-500">"{user.company?.catchPhrase}"</p>
                     <p className="text-xs text-gray-500 mt-1">{user.company?.bs}</p>
                 </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;