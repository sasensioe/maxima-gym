import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { ClientsService } from 'src/app/services/dashboard-services/clients.service';
import { MatSelectChange } from '@angular/material/select';

interface Plan {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.css']
})
export class SelectClientComponent implements OnInit {

  private _from: number = 0;
  public totalClients: number;
  public clients: Client[] = [];
  public searching: boolean = false;
  public page_number: number = 1;
  
  public filterForm = new FormGroup({
    plan: new FormControl('all'),
    text: new FormControl('')
  });

  public plans: Plan[] = [
    {value: 'all', viewValue: 'All plans'},
    {value: 'gold', viewValue: 'Gold'},
    {value: 'platinum', viewValue: 'Platinum'},
    {value: 'titanium', viewValue: 'Titanium'},
  ]

  @ViewChild('paginator') paginator: MatPaginator;

  constructor( private _router: Router,
               private _route: ActivatedRoute,
               private _clientsService: ClientsService,
               private _searchService: SearchService ) { }

  get text():string{
    return this.filterForm.get('text').value;
  }

  get plan():string{
    return this.filterForm.get('plan').value;
  }

  ngOnInit(): void {
    this.getClients()
  }

  getClients(){
    this._clientsService.getClients(this._from, this.plan)
      .then(({total, clients}) => {
        this.clients = clients;
        this.totalClients = total;
      })
  }

  handlePage(e: PageEvent){

    if(!this.searching){
      if(e.pageIndex > e.previousPageIndex){
        this._from += 5;
        this.paginator.pageIndex + 1;
        this.getClients();
      }else{
        this._from -= 5;
        this.paginator.pageIndex - 1;
        this.getClients();
      }
    }else{
      this.page_number = e.pageIndex + 1;
    }

  }

  filter(){
    if( this.text !== ''){
      this._searchService.search('clients', this.text, this.plan)
        .then((resp:any) => {
          this.paginator.firstPage();
          this.clients = resp;
          this.totalClients = resp.length;
          this.searching = true;
        })
    }else if(this.text === ''){
      this.paginator.firstPage();
      this._from = 0;
      this.getClients();
      this.searching = false;
    }
  }

  changePlan(e:MatSelectChange){
    this.filterForm.get('plan').setValue(e.value)
    this.paginator.firstPage();
    if( this.text !== ''){
      this.filter();
    }else if(this.text === ''){
      this.getClients();
    }

  }

  goTo(id: number){
    this._router.navigate([`../manage-routine/${id}`], { relativeTo: this._route });
  }

}
