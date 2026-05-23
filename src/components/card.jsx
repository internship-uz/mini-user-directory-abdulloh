function Card({ filterUsers, search }) {
   return (
      <main className='w-full max-w-[1300px] mt-8 px-6'>
           {filterUsers.length === 0 ? (
             <div className="text-center text-gray-500 mt-10">No users found matching start with "{search}"</div>
           ) : (
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
               {filterUsers.map(user => (
                 <div key={user.id} className='bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col gap-3'>
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
         </main>
   );
}

export default Card;