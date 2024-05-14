import React from 'react'

function movie () {}

const getmovie = () =>{
    fetch( "https://api.themoviedb.org/3/discover/movie?api_key=1ee5d6de8f07ecc1a8dd0999ac5a2fbd")
    .then(res => res.json())
    .then(jason => console.log(json))
}
useEffect(()=>{
    getmovie()
},[])

return (
 <div>
    Movie
 </div>
)

export default movie