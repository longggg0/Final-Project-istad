import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "../features/popular/popularAction";
import { useEffect } from "react";

export default function Popular({backdrop_path,original_title,release_date}) {
  const dispatch = useDispatch()
  
  const { data } = useSelector((state) => state.popular);

  useEffect(()=> {
    
    dispatch(fetchPopular())
  },[])

    return (
      <main>
            <ul className="px-4 grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                {
                    data.results && data.results.map((popular) => (
                        <li className="w-full mx-auto group sm:max-w-sm">
                            
                                <img src={`https://image.tmdb.org/t/p/w500${popular.backdrop_path}`}
                                    loading="lazy"
                                    alt={popular.original_title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-white text-sm">
                                        {popular.release_date}
                                    </span>
                                    <h3 className="text-lg text-blue-500 duration-150 font-extrabold tracking-tight leading-tight ">
                                        {popular.original_title}
                                    </h3>
                                    <p className="text-white text-sm duration-150">
                                        {popular.overview}
                                    </p>
                                </div>
                            
                        </li>
                    ))
                }
            </ul>
        </main>
    );
  }
  