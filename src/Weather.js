import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
let urlKey = "2ee22b85e49eeb365b43bd7a023f52ac";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${urlKey}`;
const [temperature, setTemperature] = useState(null);

function handleRequest(response) {
    setTemperature(response.data.main.temp)
}

axios.get(apiUrl).then(handleRequest);
return(
    <h1>{temperature}</h1>
)
}