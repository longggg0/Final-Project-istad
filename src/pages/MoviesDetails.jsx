import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMoviesDetails } from "../features/movie/movieAction";
import AppNavbar from "../components/AppNavbar";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    
    dispatch(fetchMoviesDetails(params.id));
  }, []);
  const { detail } = useSelector((state) => state.movie);
  console.log("Movie detail from Redux:", detail);
  return (
    <>
    <AppNavbar/>
      <section
        style={{
            backgroundImage : `url(https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${detail.backdrop_path})`
        }
      }
       className={`relative bg-cover bg-center bg-no-repeat`} >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-500">
                {detail.original_title}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              {detail.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a target="_blank"
                href={detail.homepage}
                className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}