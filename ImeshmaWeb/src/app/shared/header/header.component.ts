import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from 'src/app/shared/modal-popup/modal-popup.component'
import { UserService } from 'src/app/services/user.service';
import { LoginsuccessService } from 'src/app/services/loginsuccess.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 

  userDetails;

  constructor(private _messageService: LoginsuccessService, private modal: NgbModal, private service: UserService, private router: Router) {
    this._messageService.listen().subscribe((m: any) => {
      this.onFilterClick(m);
    })
  }

  onFilterClick(event) {
    //console.log('Fire onFilterClick: ', event);
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        this.userDetails = null;
        console.log(err);
      },
    );
  }

  ngOnInit() {
    this.onFilterClick(null);
  }

  onClick() {
    this.modal.open(ModalPopupComponent, { size: 'lg' });
  }

  onLogOut(e) {
    localStorage.removeItem('token');
    this.onFilterClick(e);
  }
}
