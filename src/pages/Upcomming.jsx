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
                                    <span className="block text-white text-sm">
                                        {upcomming.release_date}
                                    </span>
                                    <h3 className="text-lg text-blue-500 duration-150 font-extrabold tracking-tight leading-tight ">
                                        {upcomming.original_title}
                                    </h3>
                                    <p className="text-white text-sm duration-150">
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
