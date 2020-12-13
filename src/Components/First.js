import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Language from './Language';
import "./Style.css"
const Loader = () => (
    <div class="divLoader">
      <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
      </svg>
    </div>
  );

class First extends Component {
    render() {
        return (
          <div>
              {this.state.loading ? <Loader /> : null}
            <Language language={this.state.language} />
          </div>
        )
    }

    state = {
        loading: true,
        language: []
    };

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://server-dot-ilm-client-dev.appspot.com/api/v1/localization/languages',
         { method : 'GET',
           headers : { 
             'content-type' : 'application/json',
             'accept'  : 'application/json',
             'cache-control' : 'max-age=120'
          },

         }) .then(res => res.json())
            .then((data) => {
                this.setState({ language: data, loading:false })
            })
            .catch(console.log)
            console.error(Language);
    }
}



export default First;