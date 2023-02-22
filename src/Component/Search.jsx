import React, { useEffect, useState } from 'react'
import "./search.css"
const Search = () => {
    let [city, setcity] = useState(null)
    let [search, setsearch] = useState("")
    console.log(city);
    useEffect(() => {

        let fetchApi = async () => {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=matric&appid=93984176a8499deeb90a66d98bea0a5d`

            let response = await fetch(url);
            let resJson = await response.json();
            // console.log(rejson);
            setcity(resJson.main);
        };
        fetchApi();

    }, [search])
    return (
        <div>
            <div className="box">
                <div className="inputData">
                    <input className="inputFeild" value={search} type="search" onChange={(e) => { setsearch(e.target.value) }} placeholder="Enter Your City" />
                </div>


                {!city ?
                    null : (
                        <div className='row'>
                            <div className='col-md-6 ' id='l_side'>
                                <h2 className="location">
                                    <i class="fa fa-street-view "></i> {search}
                                </h2>
                            </div>

                            <div className='col-md-6' >

                                <div className='row' id='asd' >


                                    <div className=' col-sm-6' id='r_top'>
                                        <h1 className="temp d-flex justify-content-center " style={{ marginTop: "4rem", color: "wheat" }} >
                                            {city.temp}°
                                        </h1>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className=' col-sm-6' id='r_button'>

                                        <h3 className="tempmin_max d-flex justify-content-center " style={{ marginTop: "4rem", color: "wheat" }}>{city.humidity}%</h3>
                                    </div>
                                </div>
                            </div>

                        </div>


                    )}

            </div>
        </div >
    )
}

export default Search