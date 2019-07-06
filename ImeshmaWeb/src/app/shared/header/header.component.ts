import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from 'src/app/shared/modal-popup/modal-popup.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  onClick() {
    this.modal.open(ModalPopupComponent, { size: 'lg' });
  }
}
