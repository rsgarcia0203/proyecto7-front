import { Component, Input } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input() developer: any;

  protected faGithub = faGithub;
  protected faLinkedin = faLinkedin;
  protected faUser = faUser;
}
