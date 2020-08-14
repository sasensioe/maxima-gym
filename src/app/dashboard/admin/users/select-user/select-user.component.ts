import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public searchInput = this.formBuilder.group({
    search: ''
  })

  constructor( private router: Router,
               private route: ActivatedRoute,
               private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
  }

  goTo(id: number){

      this.router.navigate([`../updateUser/${id}`], { relativeTo: this.route });

  }

  search(){

    console.log(this.searchInput.controls.search.value)

  }

}
