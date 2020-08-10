import Carrier from './carrier';
import F16 from './f16';
import F35 from './f35';

const a1 = new F16();
const a2 = new F35();
const a3 = new F35();
const a4 = new F16();
const C = new Carrier([], 500, 20);
C.add(a1);
C.add(a2);
C.add(a3);
C.add(a4);
C.fill();
console.log(C.getStatus());
