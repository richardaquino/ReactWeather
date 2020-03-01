var React = require('react');

var About = (props) => {
    return(
        <div>
            <h3 className="text-center">About</h3>
            <p>
                This is weather application build on React. 
                I have built this for The Complete React Web App Developer Course.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather App</a> - I used Open Weather App to search for weather data by city name.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;