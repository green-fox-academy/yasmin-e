create database Films;

use Films;

create table Films (
 id bigint primary key auto_increment, -- 8 bytes, 32 bits
 title varchar(255),
 director varchar(255),
 release_year int,
 length_minutes int
);

insert into Films 
values  (id, 'The Knack …and How to Get It', 'Richard Lester', 1965, 85),
(id, 'Darling', 'John Schlesinger', 1965, 97),
(id, 'Blowup', 'Michelangelo Antonioni', 1966, 73),
(id, 'Alfie', 'Lewis Gilbert', 1966, 92),
(id, 'Joanna', 'Michael Sarne', 1968, 90),
(id, 'Performance', 'Donald Cammell and Nicolas Roeg', 1970, 67);

select * 
from Films;

delete from Films
where id = 2;

select title
from Films
where release_year = 1966;