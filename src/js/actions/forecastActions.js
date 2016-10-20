import axios from "axios";

export function fetchForecast(input) {
    console.log("Fethcing forecast info for: " + input.location);
    return function(dispatch) {
        dispatch({ type: "FETCH_FORECAST", payload: null })
        axios.get("http://localhost:80/public/index.php/forecastlocation/" + input.location.replace(" ", "%20"))
            .then((response) => {
                dispatch({ type: "FETCH_FORECAST_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_FORECAST_REJECTED", payload: err })
            })
    }
}