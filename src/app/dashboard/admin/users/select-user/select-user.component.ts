import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { UsersService } from 'src/app/services/dashboard-services/users.service';
import { User } from 'src/app/models/user.model';
import { SearchService } from 'src/app/services/search.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

interface Role {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  private _from: number = 0;
  public totalUsers: number;
  public users: User[] = [];
  public searching: boolean = false;
  public page_number: number = 1;
  
  public filterForm = new FormGroup({
    role: new FormControl('all'),
    text: new FormControl('')
  });

  public roles: Role[] = [
    {value: 'all', viewValue: 'All roles'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'editor', viewValue: 'Editor'},
    {value: 'receptionist', viewValue: 'Receptionist'},
    {value: 'trainer', viewValue: 'Trainer'},
  ]

  @ViewChild('paginator') paginator: MatPaginator;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private usersService: UsersService,
               private searchService: SearchService) { }

  get text():string{
    return this.filterForm.get('text').value;
  }

  get role():string{
    return this.filterForm.get('role').value;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers(this._from, this.role)
      .then(({total, users}) => {
        this.users = users;
        this.totalUsers = total;
      })
  }

  handlePage(e: PageEvent){

    if(!this.searching){
      if(e.pageIndex > e.previousPageIndex){
        this._from += 5;
        this.paginator.pageIndex + 1;
        this.getUsers();
      }else{
        this._from -= 5;
        this.paginator.pageIndex - 1;
        this.getUsers();
      }
    }else{
      this.page_number = e.pageIndex + 1;
    }

  }

  filter(){
    if( this.text !== ''){
      this.searchService.search('users', this.text, this.role)
        .then((resp:any) => {
          this.paginator.firstPage();
          this.users = resp;
          this.totalUsers = resp.length;
          this.searching = true;
        })
    }else if(this.text === ''){
      this.paginator.firstPage();
      this._from = 0;
      this.getUsers();
      this.searching = false;
    }
  }

  changeRole(e:MatSelectChange){
    this.filterForm.get('role').setValue(e.value)
    this.paginator.firstPage();
    if( this.text !== ''){
      this.filter();
    }else if(this.text === ''){
      this.getUsers();
    }

  }

  goTo(id: number){
    this.router.navigate([`../update-user/${id}`], { relativeTo: this.route });
  }

}
