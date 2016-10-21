import React from "react";

export default class Footer extends React.Component {
    
    
    render() {
        return (

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 text-center">
                            <h4><strong>This page was developed as an exercise for a job application, using React, Redux and Laravel by <i class="fa fa-github fa-fw"></i><a href="https://github.com/marciodsousa">Márcio de Sousa</a></strong>
                            </h4>
                            <p><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a> and icons by <a href="http://adamwhitcroft.com/">Adam Whitcroft</a></p>
                            
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}