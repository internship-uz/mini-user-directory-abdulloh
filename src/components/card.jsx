import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserDetailsModal from './userDetailsModal';

function Card() {
   const { filterUsers, search, loading, error } = useContext(UserContext);
   const [selectedUser, setSelectedUser] = useState(null);

   if (loading) {
       return (
           <main className='w-full max-w-[1300px] mt-8 px-6 flex justify-center'>
               <div className="text-center text-indigo-600 mt-10 font-medium flex items-center gap-2">
                   <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                   Loading users...
               </div>
           </main>
       );
   }

   if (error) {
       return (
           <main className='w-full max-w-[1300px] mt-8 px-6 flex justify-center'>
               <div className="text-center text-red-500 mt-10 p-4 bg-red-50 rounded-lg">
                    Error loading users: {error}
               </div>
           </main>
       );
   }

   return (
      <main className='w-full max-w-[1300px] mt-8 px-6'>
           {filterUsers.length === 0 ? (
             <div className="text-center text-gray-500 mt-10">
                {search ? `No users found matching "${search}"` : "No users found."}
             </div>
           ) : (
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
               {filterUsers.map(user => (
                 <div 
                    key={user.id} 
                    onClick={() => setSelectedUser(user)}
                    className='bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 cursor-pointer hover:border-indigo-300'
                 >
                   <div className='flex items-center gap-3'>
                     <div className='w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl'>
                       {user.name.charAt(0)}
                     </div>
                     <div>
                       <h2 className='text-lg font-bold text-gray-800 leading-tight'>{user.name}</h2>
                     </div>
                   </div>
                   <div className='text-sm text-gray-600 mt-2 flex flex-col gap-2'>
                     <p><span className='font-semibold text-gray-700'>Email:</span> {user.email}</p>
                     <p><span className='font-semibold text-gray-700'>Phone:</span> {user.phone.split(' ')[0]}</p>
                     <p><span className='font-semibold text-gray-700'>City:</span> {user.address?.city}</p>
                     <p><span className='font-semibold text-gray-700'>Company:</span> {user.company?.name}</p>
                   </div>
                 </div>  
               ))}
             </div>
           )}

           <UserDetailsModal 
             user={selectedUser} 
             onClose={() => setSelectedUser(null)} 
           />
         </main>
   );
}

export default Card;