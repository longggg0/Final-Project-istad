import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchToprated } from "../features/toprated/topratedAction";

export default function Popular({backdrop_path,original_title,release_date}) {
  const dispatch = useDispatch()
  
  const { data } = useSelector((state) => state.toprated);

  useEffect(()=> {
    
    dispatch(fetchToprated())
  },[])

    return (
      <main>
            <ul className="px-4 grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                {
                    data.results && data.results.map((toprated) => (
                        <li className="w-full mx-auto group sm:max-w-sm">
                            
                                <img src={`https://image.tmdb.org/t/p/w500${toprated.backdrop_path}`}
                                    loading="lazy"
                                    alt={toprated.original_title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-white text-sm">
                                        {toprated.release_date}
                                    </span>
                                    <h3 className="text-lg text-blue-500 duration-150  font-extrabold tracking-tight leading-tight ">
                                        {toprated.original_title}
                                    </h3>
                                    <p className="text-white text-sm duration-150 ">
                                        {toprated.overview}
                                    </p>
                                </div>
                            
                        </li>
                    ))
                }
            </ul>
        </main>
    );
  }
  