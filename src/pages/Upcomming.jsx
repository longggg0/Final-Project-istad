import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomming } from "../features/upcomming/upcommingAction";

export default function Upcomming({ backdrop_path, original_title, overview }) {
  
  const dispatch = useDispatch()
  
  const { data } = useSelector((state) => state.upcomming);

  useEffect(()=> {
    console.log('ok')
    dispatch(fetchUpcomming())
  },[])

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {data.results && data.results.map((upcomming, index) => (
          <a href="#" className="block">
            <img
              alt=""
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${upcomming.backdrop_path}`}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              {upcomming.original_title}
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">{upcomming.overview}</p>
          </a>
        ))}
    </div>
  );
}
