import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <a href="#" class="no-hover">
              <div class="card text-dark bg-light mb-3">
                <img src="create_mission.jpg" class="card-img-top" alt="Neuen Einsatz anlegen" />
                <div class="card-body">
                  <h5 class="card-title">Neuen Einsatz anlegen</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6">
            <a href="#" class="no-hover">
              <div class="card text-dark bg-light mb-3">
                <img src="einstellungen.png" class="card-img-top" alt="Neuen Einsatz anlegen" />
                <div class="card-body">
                  <h5 class="card-title">Einstellungen</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body">
                <h5 class="card-title">Einsätze</h5>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Bezeichnung</th>
                      <th scope="col">Alarmierung</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Personensuche Gütersloh</td>
                      <td>12.6.2021 13:43</td>
                      <td>laufend</td>
                      <td><a href="/Mission">bearbeiten</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Wasserrettung Großensee</td>
                      <td>15.6.2021 0:01</td>
                      <td>abgeschlossen</td>
                      <td><a href="#">ansehen</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>MT Anforderung HH</td>
                      <td>19.612.2021 16:12</td>
                      <td>abgeschlossen</td>
                      <td><a href="#">ansehen</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
