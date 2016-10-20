export default function reducer(state = {
    loading: false,
    loadingMessage: null,
    loaded: null,
    error: null,
    locationForecast: {
        name: null,
        lat: null,
        long: null
    }
}, action) {
    switch (action.type) {
        case "FETCH_FORECAST":
            {
                return {...state, loading: true, loadingMessage: "Fetching Forecast..." };
            }
        case "FETCH_FORECAST_FULFILLED":
            {
                return {...state,
                    loading: false,
                    loaded: true,
                    locationForecast: {...state.locationForecast,
                        name: action.payload.name,
                        lat: action.payload.lat,
                        long: action.payload.long,
                        currentForecast: action.payload.currentForecast
                    }
                };
            }
        case "FETCH_FORECAST_REJECTED":
            {
                return {...state,
                    loading: false,
                    loaded: false
                };
            }
        case "FETCH_30DAY_FORECAST":
            {
                return {...state,
                    loading: true
                };
            }
        case "FETCH_30DAY_FORECAST_FULFILLED":
            {
                return {...state,
                    loading: false
                };
            }
        case "FETCH_30DAY_FORECAST_REJECTED":
            {
                return {...state,
                    loading: false
                };
            }
    }
    return state;
}