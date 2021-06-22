import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="row">
        <div class="col-sm-6">
          <div class="card text-dark bg-light mb-3">
          <img src="create_mission.jpg" class="card-img-top" alt="Neuen Einsatz anlegen" />
            <div class="card-body">
              <h5 class="card-title">Neuen Einsatz anlegen</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Okay</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card text-dark bg-light mb-3">
          <img src="einstellungen.png" class="card-img-top" alt="Neuen Einsatz anlegen" />
            <div class="card-body">
              <h5 class="card-title">Einstellungen</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Okay</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
