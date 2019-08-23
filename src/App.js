import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Creatures from "./Creatures";
import unicornData from "./data/unicorn-data";
import puppyData from "./data/puppy-data";
import sharkData from "./data/shark-data";
import "./App.css";
import CreatureDetails from "./CreatureDetails";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink exact to="/unicorns" className="nav">
            Unicorns
          </NavLink>
          <NavLink exact to="/puppies" className="nav">
            Puppies
          </NavLink>
          <NavLink exact to="/sharks" className="nav">
            Sharks
          </NavLink>
          <NavLink exact to="/" className="nav">
            Home
          </NavLink>
        </header>
        <Route exact path="/" component={Home} />
        <Route
          exact path="/unicorns"
          render={() => <Creatures data={unicornData} />}
        />
        <Route exact path="/puppies" render={() => <Creatures data={puppyData} />} />
        <Route exact path="/sharks" render={() => <Creatures data={sharkData} />} />
        <Route
          path="/unicorns/:id"
          render={({ match }) => {
            const {id} = match.params;
            const findChuck = unicornData.find(unicorn => unicorn.id === parseInt(id))

            return (
              findChuck ?  <CreatureDetails {...findChuck}/> : <h1>Nope!</h1>
            )
          }}
        />
        <Route
          path="/puppies/:id"
          render={({ match }) => {
            const { id } = match.params;
            const findChuck = puppyData.find(puppy => puppy.id === parseInt(id))

            return (
              findChuck ? <CreatureDetails {...findChuck} /> : <h1>Nope!</h1>
            )
          }}
        />
        <Route
          path="/sharks/:id"
          render={({ match }) => {
            const { id } = match.params;
            const findChuck = sharkData.find(shark => shark.id === parseInt(id))

            return (
              findChuck ? <CreatureDetails {...findChuck} /> : <h1>Nope!</h1>
            )
          }}
        />
      </main>
    );
  }
}
