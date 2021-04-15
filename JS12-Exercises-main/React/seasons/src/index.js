import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
        console.log('My comp was rendered')
    }

    componentDidUpdate() {
        console.log('My comp was updated')

    }
    

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>
                Error: <strong>{this.state.errorMessage}</strong>
            </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div><Spinner message={'Waiting for location request...'} /></div>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("div"));

if (module.hot) {
    module.hot.accept();
}