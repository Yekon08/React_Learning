/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import messages from './messages';
import TablePerso from './TablePerso';
import CardPerso from './CardPerso';
import GridPersos from './GridPersos';

import HookClassExample from 'components/HookClassExample'
import HookExample from 'components/HookExample'

const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: 'a',
      persos: [],
      checked: false,
    };
  }

  componentDidMount() {
    this.handleCallApiPerso(this.state.searchName);
  }

  handleChange = event => {
    this.setState({ searchName: event.target.value });
  };

  handleSearch = () => {
    this.handleCallApiPerso(this.state.searchName);
  };

  handleCheck = event => {
    const c = event.target.checked;
    this.setState({
      checked: c,
    });
  };

  handleCallApiPerso = name => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=a3d3e4a75a0f7e8ec7c7025edc535cf3`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log('data api', data.data.results);
        this.setState({ persos: data.data.results });
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

        <HookClassExample />
        <HookExample />

        <TextField
          id="standard-name"
          label="Name"
          value={this.state.searchName}
          onChange={this.handleChange}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={this.handleSearch}>
          Rechercher...
        </Button>

        <Checkbox checked={this.state.checked} onChange={this.handleCheck}/>

        { this.state.checked ? <GridPersos persos={this.state.persos}/> : <TablePerso persos={this.state.persos}/> }
        )}

        {/* { this.state.persos[0] ? <CardPerso perso={this.state.persos[0]} /> : <div><p>Aucun Personnage</p></div>} Cards Personnage si possible */}
      </div>
    )};
  }