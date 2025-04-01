import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomming } from "../features/upcomming/upcommingAction";

export default function Upcomming({ backdrop_path, original_title, overview }) {
  
  const dispatch = useDispatch()
  
  const { data } = useSelector((state) => state.upcomming);

  useEffect(()=> {
    
    dispatch(fetchUpcomming())
  },[])

  return (
    <main>
            <ul className="px-4 grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                {
                    data.results && data.results.map((upcomming) => (
                        <li className="w-full mx-auto group sm:max-w-sm">
                            
                                <img src={`https://image.tmdb.org/t/p/w500${upcomming.backdrop_path}`}
                                    loading="lazy"
                                    alt={upcomming.original_title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">
                                        {upcomming.release_date}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {upcomming.original_title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                        {upcomming.overview}
                                    </p>
                                </div>
                            
                        </li>
                    ))
                }
            </ul>
        </main>
  );
}
