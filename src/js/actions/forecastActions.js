import axios from "axios";

export function fetchForecast(input) {
    console.log("Fethcing forecast info for: " + input.location);
    return function(dispatch) {
        dispatch({ type: "FETCH_FORECAST", payload: null })
        axios.get("/public/index.php/forecastlocation/" + input.location.replace(" ", "%20"))
            .then((response) => {
                dispatch({ type: "FETCH_FORECAST_FULFILLED", payload: response.data })

                dispatch({ type: "FETCH_30DAY_FORECAST", payload: null })
                axios.get("/public/index.php/forecastlocation/" + input.location.replace(" ", "%20") + "/pastdays/30")
                    .then((response) => {
                        dispatch({ type: "FETCH_30DAY_FORECAST_FULFILLED", payload: response.data })
                    })
                    .catch((err) => {
                        dispatch({ type: "FETCH_30DAY_FORECAST_REJECTED", payload: err })
                    })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_FORECAST_REJECTED", payload: err })
            })
    }
}