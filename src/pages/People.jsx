import { useDispatch, useSelector } from "react-redux";
import PeopleCard from "../components/PeopleCard";
import { useEffect } from "react";
import { fetchPeople } from "../features/people/peopleAction";

export default function People() {

    const dispatch = useDispatch()
    const {data} = useSelector(state=> state.people)
    useEffect(() =>{
        dispatch(fetchPeople())
    },[]
    )

    return (
        <div className="bg-white p-5  sm:py-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 ">
                {
                    data.results && data.results.map((person, index)=>
                    <PeopleCard
                    
                    name={person.name}
                    profile_path={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
                    original_name={person.original_name}
                    overview={person.known_for[0].overview}

                    />
                    )
                }
            </div>
        </div>
    )
}