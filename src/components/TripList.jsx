import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
// import { v4 as uuidv4 } from 'uuid';


function TripList() {
    const [url, setUrl] = useState("http://localhost:3000/trips")
    const { data: trips, isPending, error } = useFetch(url)

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='flex flex-col items-center justify-center max-w-2xl mx-auto h-full'>
                <h1 className='text-5xl font-bold mb-11'>TripList</h1>
                <ul className='flex flex-col gap-5'>
                    {isPending && <h1>Loading...</h1>}
                    {error && <h1>{error}</h1>}
                    {trips && trips.map((trip) => {
                        return <li key={trip.title} className='flex flex-col items-center gap-5'>
                            <h1 className='font-bold'>{trip.title}</h1>
                            <p>{trip.price}</p>
                        </li>
                    })}
                </ul>
                <div className='flex items-center justify-center gap-5 mt-10'>
                    <button onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")} className='text-base px-12 py-1 border-black border-2'>Europe Trips</button>
                    <button onClick={() => setUrl("http://localhost:3000/trips")} className='text-base px-12 py-1 border-black border-2'>All Trips</button>
                </div>
            </div>
        </div>
    )
}

export default TripList