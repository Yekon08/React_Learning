/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import { Card } from '@material-ui/core';
import messages from './messages';
import CardPerso from './CardPerso';

const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class PersonnagesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perso: null,
      searchId: props.match.params.id,
    };
  }

  componentDidMount() {
    this.handleCallApiPerso(this.state.searchId);
  }

  handleCallApiPerso = id => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=a3d3e4a75a0f7e8ec7c7025edc535cf3`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({ perso: data.data.results[0] });
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error api
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        {this.state.perso ? <CardPerso perso={this.state.perso} /> : <div />}
      </div>
    );
  }
}
