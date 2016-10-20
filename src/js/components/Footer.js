import React from "react";

export default class Footer extends React.Component {
    
    
    render() {
        return (

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 text-center">
                            <h4><strong>This page was developed as an exercise for a job application, using React, Redux and Laravel by <a href="https://github.com/marciodsousa">Márcio de Sousa</a></strong>
                            </h4>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-github fa-fw"></i> <a href="http://github.com/marciodsousa">GitHub</a></li>
                                <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:marciodesousa16@gmail.com">marciodesousa16@gmail.com</a>
                                </li>
                            </ul>
                            <hr class="small"/>
                            <p><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a> and icons by <a href="http://adamwhitcroft.com/">Adam Whitcroft</a></p>
                            
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}