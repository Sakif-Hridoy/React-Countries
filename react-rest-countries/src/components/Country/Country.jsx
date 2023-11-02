import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
    // console.log(country)
    const{name,flags,population,area,cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited ? 'purple':'black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)} className='btn'>Mark Visited</button>
            <br />
            <button   onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Going'}</button>
            <div>
            {visited ? 'I have visited this country' :'I want to visit'}
            </div>
        </div>
    );
};

export default Country;