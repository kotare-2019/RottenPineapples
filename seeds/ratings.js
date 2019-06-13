exports.seed = function (knex, Promise) {
    return knex('ratings').del()
      .then(function () {
        return knex('ratings').insert([
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
          {rating: '', movie_id: '', user_id: ''},
         ])
      })
  }