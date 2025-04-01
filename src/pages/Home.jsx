import { FaMinus, FaPlus } from "react-icons/fa6";
import { ButtonIcon } from "../components/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import { fetchMovies } from "../features/movie/movieAction";
import { Link } from "react-router";

export default function Home() {

    const dispatch = useDispatch()

    const { data, status } = useSelector((state) => state.movie)

    const { isAuthenticated, accessToken } = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(fetchMovies())

        console.log('isAuthenticated ', isAuthenticated)
        console.log('accessToken ', accessToken)

    }, [])



    return (
        <main>
            <ul className="px-4 grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-5">
                {
                    data.results && data.results.map((movie) => (
                        <li className="w-full mx-auto group sm:max-w-sm">
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    loading="lazy"
                                    alt={movie.original_title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-white-600 text-sm">
                                        {movie.release_date}
                                    </span>
                                    <h3 className="text-lg text-blue-600 duration-150 font-semibold">
                                        {movie.original_title}
                                    </h3>
                                    <p className="text-white text-sm duration-150">
                                        {movie.overview}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}