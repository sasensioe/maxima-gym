import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { SearchService } from 'src/app/services/search.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public totalUsers: number;
  public users: User[] = [];
  public tempUsers: User[] = [];
  public from: number = 0;
  private text:boolean = false;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private usersService: UsersService,
               private searchService: SearchService) { }

  

  ngOnInit(): void {

    this.getUsers()

  }

  getUsers(){
    this.usersService.getUsers(this.from).subscribe(({total, users}) => {
      this.tempUsers = users;
      this.users = users;
      this.totalUsers = total;
    })
  }

  changePage(value: number){

    this.from += value;

    if(this.from < 0){
      this.from = 0;
    }else if(this.from > this.totalUsers){
      this.from -= value;
    }

    this.getUsers()

  }
  
  goTo(id: number){

      this.router.navigate([`../updateUser/${id}`], { relativeTo: this.route });

  }

  search(text:string){

    if(text){
      this.text = true;
    }else{
      this.text = false;
    }

    if(text.length === 0){
      return this.users = this.tempUsers;
    }

    this.searchService.search('users', text).subscribe(resp => {
      this.users = resp;
      this.totalUsers = resp.length;
    })
    console.log(this.text)

  }



  handlePage(e: PageEvent){

    if(e.pageIndex > e.previousPageIndex){
      this.from += 5;

      if(!this.text){
        this.getUsers()
      }else{
        return
      }

    }else{
      this.from -= 5;

      if(!this.text){
        this.getUsers()
      }else{
        return
      }

    }


    
  }

}
