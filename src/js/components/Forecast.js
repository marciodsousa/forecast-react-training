import React from "react";

import CurrentForecastComponent from "./CurrentForecastComponent";
import PreviousForecastComponent from "./PreviousForecastComponent";

export default class Forecast extends React.Component {

    constructor() {
        super();
    }
    processPastForecasts(location) {
        if(!location.previousForecasts) {
            return null;
        }
        const mappedForecasts = location.previousForecasts.map(singleForecast => <PreviousForecastComponent forecast= {singleForecast}/>);
        return mappedForecasts

    }
    
    render() {
        if (this.props.searchedLocation.currentForecast) {
            const past30DaysForecast = this.processPastForecasts(this.props.searchedLocation);
            return (
                <section id="portfolio" class="portfolio">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-3 text-center">
                                <CurrentForecastComponent currentForecast={this.props.searchedLocation.currentForecast} />
                            </div>

                            <div class="col-lg-12 text-center">
                                <h2>30 Day Forecast:</h2>
                                <hr class="small"/>
                                <div class="row">
                                    {past30DaysForecast}
                                </div>
                            </div>
            </div>
        </div>
    </section>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}