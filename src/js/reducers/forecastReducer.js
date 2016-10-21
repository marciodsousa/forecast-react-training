export default function reducer(state = {
    loading: false,
    loadingMessage: null,
    primaryLoading: false,
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
                return {...state,
                    loading: true,
                    primaryLoading: true,
                    loadingMessage: "Fetching Forecast..."
                };
            }
        case "FETCH_FORECAST_FULFILLED":
            {
                return {...state,
                    loading: false,
                    primaryLoading: false,
                    loaded: true,
                    loadingMessage: null,
                    locationForecast: {...state.locationForecast,
                        name: action.payload.name,
                        lat: action.payload.lat,
                        long: action.payload.long,
                        currentForecast: action.payload.currentForecast,
                        previousForecasts: []
                    }
                };
            }
        case "FETCH_FORECAST_REJECTED":
            {
                return {...state,
                    loading: false,
                    loaded: false,
                    primaryLoading: false,
                    loadingMessage: null,
                    locationForecast: {}
                };
            }
        case "FETCH_30DAY_FORECAST":
            {
                return {...state,
                    loading: true,
                    loaded: false,
                    primaryLoading: true,
                    loadingMessage: "Fetching 30 Day Forecast..."
                };
            }
        case "FETCH_30DAY_FORECAST_FULFILLED":
            {
                return {...state,
                    loading: false,
                    loaded: true,
                    primaryLoading: false,
                    loadingMessage: null,
                    locationForecast: {...state.locationForecast,
                        name: action.payload.name,
                        lat: action.payload.lat,
                        long: action.payload.long,
                        currentForecast: {...state.locationForecast.currentForecast },
                        previousForecasts: action.payload
                    }
                };
            }
        case "FETCH_30DAY_FORECAST_REJECTED":
            {
                return {...state,
                    loading: false,
                    loaded: false,
                    primaryLoading: false,
                    loadingMessage: null,
                    locationForecast: {...state.locationForecast,
                        name: action.payload.name,
                        lat: action.payload.lat,
                        long: action.payload.long,
                        currentForecast: {...state.locationForecast.currentForecast },
                        previousForecasts: []
                    }
                };
            }
    }
    return state;
}