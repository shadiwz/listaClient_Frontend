import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-lista-clients',
  templateUrl: './lista-clients.component.html',
  styleUrls: ['./lista-clients.component.css']
})
export class ListaClientsComponent implements OnInit {

  allClients: any = []
  filters:any= {
    limit: 10,
    offset: 0,
    name: ''
  }
  constructor(private clientService: ClientsService) {
    this.fetchUsers(this.filters);

     }

  ngOnInit(): void {
    
  }

  fetchUsers(filters) {
    this.clientService.getClients(filters).subscribe(it => {
      this.allClients = it
      if(this.allClients.length == 0 && this.filters.name != '') {
        alert("Nenhum registro encontrado com esse")
      }
      if(this.allClients.length == 0 && this.filters.name == '') {
        alert("Ja esta na pagina maxima")
      }
    })
  }

  filterByName() {
    this.fetchUsers(this.filters);
  }

  nextPage() {
    this.filters.offset = this.filters.offset + this.filters.limit
    this.fetchUsers(this.filters)
  }

  backPage() {
    this.filters.offset = this.filters.offset - this.filters.limit
    
    this.fetchUsers(this.filters)
    if(this.filters.offset <= 0) {
      alert("Voce ja chegou na pagina minima")
    }
  }

  deleteUser(user){
    this.clientService.deletClients(user.id).subscribe(it => {
      alert(user.name + " Removido")
      this.fetchUsers(this.filters)
    })
  }
}
