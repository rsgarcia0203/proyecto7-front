import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  protected developers = [
    {
      name: 'Ronny García Zambrano',
      user: 'rsgarcia0203',
      description: 'Desarrollador FullStack con experiencia en C#, PHP, Python, Java, JavaScript, Dart, .Net, Xamarin, Laravel, Flask, Spring, Angular, Express, Nest.js, Next.js y Flutter.  Siempre buscando la creación de soluciones escalables y eficientes.',
      linkedin: 'https://www.linkedin.com/in/rsgarcia0203/',
      github: 'https://github.com/rsgarcia0203',
      photo: 'https://media.licdn.com/dms/image/C5603AQG_T_soyNlyHg/profile-displayphoto-shrink_200_200/0/1628449553784?e=1699488000&v=beta&t=b-2HJvCk9nZVy7OZ09_FHvIvQQK0I0IoH6XANxolh7w'
    },
    {
      name: 'Keneth Pacheco Suarez',
      user: 'kenethPs',
      description: 'Desarrollador Back-End con experiencia en Python, Node.js y Express.  Siempre buscando conseguir el AP!!',
      linkedin: 'https://www.linkedin.com/in/keneth-pacheco-su%C3%A1rez-2062681a3/',
      github: 'https://github.com/kenethPs',
      photo: 'https://scontent.fgye1-1.fna.fbcdn.net/v/t39.30808-6/212462964_4184301238316076_3162189359004692810_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFMmZ8GCkNXj73xHT-VySZUkKZ5_J8eSCeQpnn8nx5IJ53m46CCvrQT7v7aE53W5MZF5Buk41rj9Nz1_zoW2Mdz&_nc_ohc=vU6jLlcqhgMAX97bQG_&_nc_ht=scontent.fgye1-1.fna&oh=00_AfCzCecLqKVj37CvwNLRBptYFUw3uutct63z4GgAAMHRgg&oe=64FBCA04'
    }
  ];
}
