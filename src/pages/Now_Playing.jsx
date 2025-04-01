import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowplaying } from "../features/nowplaying/nowplayingAction";

export default function NowPlaying({backdrop_path,original_title,overview}) {
  const dispatch = useDispatch()
  
  const { data } = useSelector((state) => state.nowplaying);

  useEffect(()=> {
    
    dispatch(fetchNowplaying())
  },[])

    return (
      <main>
            <ul className="px-4 grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                {
                    data.results && data.results.map((nowplaying) => (
                        <li className="w-full mx-auto group sm:max-w-sm">
            
                                <img src={`https://image.tmdb.org/t/p/w500${nowplaying.backdrop_path}`}
                                    loading="lazy"
                                    alt={nowplaying.original_title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">
                                        {nowplaying.release_date}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {nowplaying.original_title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                        {nowplaying.overview}
                                    </p>
                                </div>
                           
                        </li>
                    ))
                }
            </ul>
        </main>
    );
  }
  