import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, AuthServiceConfig } from 'ng4-social-login';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-wizard',
  templateUrl: './login-wizard.component.html',
  styleUrls: ['./login-wizard.component.css']

})
export class LoginWizardComponent implements OnInit {

 
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService, public service: UserService, private toastr: ToastrService) { }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData
    });
  }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData
    });
  }

  ngOnInit() {
    //this.facebookLogin();
    //this.googleLogin();
  }

 onSubmit() {
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

}
