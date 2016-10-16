import axios from "axios";

export function fetchForecast(input) {
    console.log("Fethcing forecast info for: " + input.location);
    return function(dispatch) {
        axios.get("https://api.darksky.net/forecast/012ed9cef6a1ad202c6ac6b45408e9f8/37.8267,-122.4233")
            .then((response) => {
                dispatch({ type: "FETCH_FORECAST_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_FORECAST_REJECTED", payload: err })
            })
    }
}