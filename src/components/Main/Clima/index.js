import './style.scss';
import { useEffect, useState } from 'react'

const Clima = ()=>{
    const [data, setData] = useState({})
    useEffect(async () => {
        getWeather();
    }, [])

    const getWeather = async ()=>{
        var misCabeceras = new Headers();
        misCabeceras.append('Access-Control-Allow-Origin','http://localhost:3000/clima');
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position) => {
                var pos = {
                    lat: Math.floor(position.coords.latitude),
                    lng: Math.floor(position.coords.longitude)
                };
                var miInit = {
                    method: 'GET',
                    headers: misCabeceras,
                    mode: 'cors',
                    cache: 'default'
                };
                let url = 'https://fcc-weather-api.glitch.me/api/current?lat='+pos.lat+'&lon='+pos.lng;
                const weatherAPI = await fetch(url,miInit)
                const weather = await weatherAPI.json()
                setData(weather)
            });
        }
    }

    const convertion = () => {
      let degType = document.getElementById('degType');
      let temp = document.getElementById('temp');
      if(degType.innerHTML == "C"){
        temp.innerHTML = temp.innerHTML*1.8+32;
        degType.innerHTML = 'F';
      } else {
        temp.innerHTML = (temp.innerHTML-32)/1.8;
        degType.innerHTML = 'C';
      }
    }

    return (
        <div className={'fc'}>
            <div className="app">
                <div className="title">
                Clima para hoy:
                <img className="weatherImg inl" src={data.weather} alt="" />
                </div>
                <div className="Info">
                    <div className="clima inl">
                    Place:
                    <div className={'inl'} id="ubicacion">{data.name}</div>
                        <div id="tempDiv">
                            Temperature:<div className={'inl'} id="temp">{data?.main?.temp}</div>°
                            <a id="degType" onClick={convertion}>C</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clima;