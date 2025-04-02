export default function PeopleCard({name,profile_path,original_name,overview}) {
  return (
    <a href="#" className="group relative block bg-black w-full h-full object-cover mb-52">
      <img
        alt={name}
        src={profile_path}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-blue-500 uppercase">
          {original_name}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-30 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </a>  
  );
}
