interface ReservationY {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements ReservationY {
  code: string;

  dow: string;

  isBooked: boolean;

  constructor(isBooked = true) {
    this.isBooked = isBooked;
  }

  getDowBooking(): string {
    const dowArr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.dow = dowArr[Math.round(Math.random() * 5)];
    return this.dow;
  }

  getCodeBooking(): string {
    const codeArr = 'A0B1C2D3E4FGHIJKL56789MNOPQRSTUVWXYZ'.split('');
    const code = [];
    for (let i = 0; i < 8; i += 1) {
      code.push(codeArr[Math.round(Math.random() * 10)]);
    }
    this.code = code.join('');
    return this.code;
  }

  print(): void {
    if (this.isBooked === true) {
      console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
      return;
    }
    console.log('This reservation is not booked yet.');
  }
}
// we can make reservations as a list of the interface
const reservations: ReservationY[] = [];

for (let i = 0; i < 10; i += 1) {
  reservations.push(new Reservation());
}

reservations.forEach((reservation) => {
  if (reservation instanceof Reservation) {
    reservation.print();
  }
});

// or instances of the class
const bookings: Reservation[] = [];

for (let i = 0; i < 3; i += 1) {
  bookings.push(new Reservation());
}

bookings.forEach((booking) => {
  booking.print();
});
