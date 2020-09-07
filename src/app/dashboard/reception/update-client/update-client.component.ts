import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/dashboard-services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  private _uid: string;
  private _passFormSubmitted: boolean = false;
  public showPassForm: boolean = false;
  public loading: boolean = true;
  public passResponse: string;
  
  public updateClientForm = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    plan: ['', Validators.required],
    address: this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
    }),
    contact: this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    }),
    access: this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  })

  public updatePassForm = this._formBuilder.group({
    pass1: ['', [Validators.required, Validators.minLength(8)]],
    pass2: ['', [Validators.required, Validators.minLength(8)]],
  }, {
    validators: this.validateSamePasswords('pass1', 'pass2')
  })

  constructor( private _formBuilder: FormBuilder,
               private _clientsService: ClientsService,
               private _route: ActivatedRoute,
               private _popUpService: PopUpService ) {
                this._uid = this._route.snapshot.params.id;
               }

  ngOnInit(){

    this._clientsService.getClientById(this._uid)
      .then(client => {
        this.updateClientForm.setValue({
          name: client.name,
          surname: client.surname,
          plan: client.plan,
          address: {
            address: client.address.address,
            city: client.address.city,
            province: client.address.province,
            postalCode: client.address.postalCode,
          },
          contact: {
            email: client.contact.email,
            phone: client.contact.phone,
          },
          access: {
            userName: client.access.userName,
            password: client.access.password,
          }
        })
        this.loading = false;
      })
      .catch(error => console.log(error))

  }

  checkMinLength(){
    const pass1 = this.updatePassForm.get('pass1');
    const pass2 = this.updatePassForm.get('pass2');
    if((pass1.hasError('minlength') || pass2.hasError('minlength'))){
      return true;
    }else{
      return false;
    }
  }

  checkSamePasswords(){
    const pass1 = this.updatePassForm.get('pass1').value;
    const pass2 = this.updatePassForm.get('pass2').value;
    if((pass1 !== pass2) && this._passFormSubmitted){
      return true;
    }else{
      return false;
    }
  }

  validateSamePasswords( pass1Name: string, pass2Name: string ){

    return (formGroup: FormGroup) => {

      const pass1 = formGroup.get(pass1Name);
      const pass2 = formGroup.get(pass2Name);

      if(pass1.value === pass2.value){
        pass1.setErrors(null)
      }else{
        pass1.setErrors({notTheSame: true});
      }
    }

  }

  updatePassword(){

    this._passFormSubmitted = true;

    if(this.updatePassForm.valid){

      const newPass = this.updatePassForm.get('pass1').value;

      this._clientsService.updatePassword(this._uid, newPass)
        .then((resp: {ok: boolean, msg: string}) => {
          if(resp.ok){
            this.passResponse = resp.msg;
          }
        })
        .catch(error => {
          console.log(error)
          this.passResponse = error.error.msg;
        })

    }else{
      return;
    }

  }

  updateClient(){

    if(this.updateClientForm.valid){
      this._clientsService.updateClient(this._uid, this.updateClientForm.value)
        .then(resp => {
          this._popUpService.openPopUp(resp);
        })
        .catch(error => {
          this._popUpService.openPopUp(error.error);
        }
      )
    }

    if(this.updateClientForm.invalid){
      const error = {
        ok: false,
        msg: 'Please, check the form'
      }
      this._popUpService.openPopUp(error);
    }
  }

  openPassForm(e: Event){
    e.preventDefault();
    this.showPassForm = !this.showPassForm;
  }


}
