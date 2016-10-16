export default function reducer(state = {
    loading: false,
    loadingMessage: null,
    loaded: null,
    error: null,
    locationForecast: {
        name: null,
        icon: null,
        lat: null,
        long: null,
        temperature: null,
        humidity: null
    },
    nextMonthForecast: []
}, action) {
    switch (action.type) {
        case "FETCH_FORECAST":
            {
                return {...state, loading: true };
            }
        case "FETCH_FORECAST_FULFILLED":
            {
                return {...state, loading: false, loaded: true, locationForecast: action.payload };
            }
        case "FETCH_FORECAST_REJECTED":
            {
                return {...state, loading: false, loaded: false };
            }
        case "FETCH_30DAY_FORECAST":
            {
                return {...state, loading: true };
            }
        case "FETCH_30DAY_FORECAST_FULFILLED":
            {
                return {...state, loading: false };
            }
        case "FETCH_30DAY_FORECAST_REJECTED":
            {
                return {...state, loading: false };
            }
    }
    return state;
}