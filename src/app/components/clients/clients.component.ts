import {Component, OnInit} from '@angular/core';
import {Client} from '../../Models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  showFieldSet: boolean;
  selectedClient: Client;
  radioButton: number;

  constructor() {
  }

  ngOnInit() {
    this.selectedClient = new Client();
    this.clients.push(new Client('Martin', 'Arthur', '16, rue Louis Castel Paris'));
    this.clients.push(new Client('Dupond', 'Edouard', '14, rue Pergolese 75116 Paris'));
    this.clients.push(new Client('Lemaitre', 'Christian', '11, rue du 19 Mars 1962 Paris'));
    this.clients.push(new Client('Anis', 'ElArbi', 'El Hamma Sud'));
    this.clients.push(new Client('neymar', 'da silva', 'Paris'));
  }

  onItemChange(client) {
    this.showFieldSet = true;
    this.selectedClient = client;
  }

  selectedRow(client, i) {
    this.showFieldSet = true;
    this.selectedClient = client;
    this.radioButton = i + 1;
  }


}
