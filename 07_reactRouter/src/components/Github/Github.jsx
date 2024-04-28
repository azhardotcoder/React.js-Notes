import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router' // importing useLoaderData hook from react-router to fetch api
function Github() {
    const data = useLoaderData() //? useLoaderData is a hook that is used to get the data that is passed from the loader function
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/azhardotcoder')
    //     .then(response => response.json())
    //     .then(data => {
            
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className='text-white flex justify-center items-center flex-col text-3xl bg-gray-500 p-4' >Github: Followers: {data.followers}
        <img className='mt-4'  src={data.avatar_url} alt="git picture" width={300} />
        </div>
        
    )
}
//! Loader function is used to fetch the data before the component is rendered
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/azhardotcoder')
    return response.json()
}

export default Github
