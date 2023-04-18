import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  //styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  date: string | undefined;
  time: string | undefined;
  seats: number | undefined;
  movieId: string | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') as string | undefined;
  }

  book(): void {
    const ticketData = { date: this.date, time: this.time, seats: this.seats };
    if (this.movieId) {
        this.movieService.bookTicket(this.movieId, ticketData)
          .subscribe(
            response => {
              console.log(response);
              // handle successful ticket booking
            },
            error => {
              console.log(error);
              // handle ticket booking error
            });
    } else {
        console.log('Movie ID is undefined');
    }
}

}
