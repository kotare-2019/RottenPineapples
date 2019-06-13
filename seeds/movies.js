exports.seed = function (knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {id: 1, title: 'A.I.', year: '2001', director: 'Steven Spielberg'}, 
        {id: 2, title: 'After Earth', year: '2013', director: 'M. Night Shyamalan'}, 
        {id: 3, title: 'Alien', year: '1979', director: 'Ridley Scott'}, 
        {id: 4, title: 'Alien vs Predator', year: '2004', director: 'Paul W. S. Anderson'}, 
        {id: 5, title: 'Avatar', year: '2009', director: 'James Cameron'},
        {id: 6, title: 'Back To The Future', year: '1985', director: 'Robert Zemeckis'}, 
        {id: 7, title: 'Battlefield Earth', year: '2000', director: 'Roger Christian'}, 
        {id: 8, title: 'Blade Runner', year: '1982', director: 'Ridley Scott'}, 
        {id: 9, title: 'Click', year: '2006', director: 'Frank Coraci'}, 
        {id: 10, title: 'Cowboys Vs Aliens', year: '2011', director: 'Jon Favreau'},
        {id: 11, title: 'District 9', year: '2009', director: 'Neill Blomkamp'}, 
        {id: 12, title: 'Jurassic Park', year: '1993', director: 'Steven Spielberg'}, 
        {id: 13, title: 'E. T.', year: '1982', director: 'Steven Spielberg'},
        {id: 14, title: 'Edge Of Tomorrow', year: '2014', director: 'Doug Liman'}, 
        {id: 15, title: 'Ex Machina', year: '2014', director: 'Alex Garland'}, 
        {id: 16, title: 'Geostorm', year: '2017', director: 'Dean Delvin'}, 
        {id: 17, title: 'Gravity', year: '2013', director: 'Alfonso'}, 
        {id: 18, title: 'Inception', year: '2010', director: 'Christopher Nolan'}, 
        {id: 19, title: 'Independance Day', year: '1996', director: 'Roland Emmerich'},
        {id: 20, title: 'Interstellar', year: '2014', director: 'Christopher Nolan'},
        {id: 21, title: 'Looper', year: '2012', director: 'Rian Johnson'},
        {id: 22, title: 'Mars Attacks', year: '1996', director: 'Tim Burton'},
        {id: 23, title: 'Minority Report', year: '2002', director: 'Steven Spielberg'},
        {id: 24, title: 'Pacific Rim', year: '2013', director: 'Guillermo Del Toro'},
        {id: 25, title: 'Pixels', year: '2015', director: 'Chris Columbus'}, 
        {id: 26, title: 'Prometheus', year: '2012', director: 'Ridley Scott'},  
        {id: 27, title: 'Robocop', year: '1987', director: 'Paul Verhoeven'},  
        {id: 28, title: 'Source Code', year: '2011', director: 'Duncan Jones'},  
        {id: 29, title: 'Space Odessy 2001', year: '2001', director: 'Stanley Kubrick'},  
        {id: 30, title: 'Star Trek', year: '2009', director: 'J. J. Abrams'},  
        {id: 31, title: 'Star Wars - A New Hope', year: '1977', director: 'George Lucas'},  
        {id: 32, title: 'Starship Troopers', year: '1997', director: 'Paul Verhoeven'},  
        {id: 33, title: 'Terminator', year: '1984', director: 'James Cameron'}, 
        {id: 34, title: 'The Avengers', year: '2012', director: 'Joss Whedon'},   
        {id: 35, title: 'The Fifth Element', year: '1997', director: 'Luc Besson'},   
        {id: 36, title: 'The Martian', year: '2015', director: 'Ridley Scott'},   
        {id: 37, title: 'The Matrix', year: '1999', director: 'Lana Wachowski'},   
        {id: 38, title: 'The Thing', year: '1982', director: 'John Carpenter'},  
        {id: 39, title: 'Total Recall', year: '1990', director: 'Paul Verhoeven'},  
        {id: 40, title: 'Transformers', year: '2007', director: 'Michael Bay'},  
        {id: 41, title: 'Tron Legacy', year: '2010', director: 'Joseph Kosinski'},  
        {id: 42, title: 'Waterworld', year: '1997', director: 'Kevin Reynolds'}, 
       ])
    })
}