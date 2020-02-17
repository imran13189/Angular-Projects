import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, SocialUser, SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, AuthServiceConfig } from 'ng4-social-login';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HeaderComponent } from 'src/app/shared/header/header.component'
import { LoginsuccessService } from 'src/app/services/loginsuccess.service';


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})

export class ModalPopupComponent implements OnInit {
  closeResult: string;
  showError: boolean = false;
  public user: any = SocialUser;

  @Output() onFilter = new EventEmitter();

  constructor(private _messageService: LoginsuccessService, public modalService: NgbActiveModal, private router: Router, private socialAuthService: AuthService, public service: UserService, private toastr: ToastrService) {
   
  }


  clickFilter(){
    // this.onFilter.emit('Register click');
    this._messageService.filter('Register click');
  }


  ngOnInit() {
    // this.facebookLogin();
    //this.googleLogin();
  }


  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      debugger;
      this.user = userData
    });
  }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      debugger;
      this.user = userData
    });
  }

  onSubmit(form: NgForm) {
    debugger;
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogin(form: NgForm) {
    debugger
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.clickFilter();
        this.modalService.close();
      },
      err => {
        if (err.status == 400)
          this.showError = true;
          //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}



