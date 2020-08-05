interface ReservationY {
  getDowBooking(): string;
  getCodeBooking(): string;
  print(): void;
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
    this.dow = dowArr[Math.round(Math.random() * dowArr.length)];
    return this.dow;
  }

  getCodeBooking(): string {
    const codeArr = 'A0B1C2D3E4FGHIJKL56789MNOPQRSTUVWXYZ'.split('');
    const code = [];
    for (let i = 0; i < 8; i += 1) {
      code.push(codeArr[Math.round(Math.random() * codeArr.length)]);
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

const myRes = new Reservation();
myRes.print();
const myRes1 = new Reservation();
myRes1.print();
const myRes2 = new Reservation(false);
myRes2.print();
const myRes3 = new Reservation();
myRes3.print();
