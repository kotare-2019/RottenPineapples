exports.seed = function (knex, Promise) {
    return knex('ratings').del()
      .then(function () {
        return knex('ratings').insert([
          {rating: '6', movie_id: '1', user_id: '1'},
          {rating: '1', movie_id: '2', user_id: '2'},
          {rating: '9', movie_id: '3', user_id: '3'},
          {rating: '4', movie_id: '4', user_id: '4'},
          {rating: '8', movie_id: '5', user_id: '5'},
          {rating: '10', movie_id: '6', user_id: '6'},
          {rating: '3', movie_id: '7', user_id: '7'},
          {rating: '7', movie_id: '8', user_id: '8'},
          {rating: '2', movie_id: '9', user_id: '9'},
          {rating: '3', movie_id: '10', user_id: '10'},
          {rating: '7', movie_id: '11', user_id: '1'},
          {rating: '8', movie_id: '12', user_id: '2'},
          {rating: '7', movie_id: '13', user_id: '3'},
          {rating: '8', movie_id: '14', user_id: '4'},
          {rating: '7', movie_id: '15', user_id: '5'},
          {rating: '1', movie_id: '16', user_id: '6'},
          {rating: '8', movie_id: '17', user_id: '7'},
          {rating: '10', movie_id: '18', user_id: '8'},
          {rating: '6', movie_id: '19', user_id: '9'},
          {rating: '9', movie_id: '20', user_id: '10'},
          {rating: '8', movie_id: '21', user_id: '1'},
          {rating: '5', movie_id: '22', user_id: '2'},
          {rating: '6', movie_id: '23', user_id: '3'},
          {rating: '6', movie_id: '24', user_id: '4'},
          {rating: '5', movie_id: '25', user_id: '5'},
          {rating: '7', movie_id: '26', user_id: '6'},
          {rating: '8', movie_id: '27', user_id: '7'},
          {rating: '7', movie_id: '28', user_id: '8'},
          {rating: '7', movie_id: '29', user_id: '9'},
          {rating: '7', movie_id: '30', user_id: '10'},
          {rating: '10', movie_id: '31', user_id: '1'},
          {rating: '6', movie_id: '32', user_id: '2'},
          {rating: '9', movie_id: '33', user_id: '3'},
          {rating: '10', movie_id: '34', user_id: '4'},
          {rating: '8', movie_id: '35', user_id: '5'},
          {rating: '4', movie_id: '36', user_id: '6'},
          {rating: '10', movie_id: '37', user_id: '7'},
          {rating: '6', movie_id: '38', user_id: '8'},
          {rating: '8', movie_id: '39', user_id: '9'},
          {rating: '7', movie_id: '40', user_id: '10'},
          {rating: '4', movie_id: '41', user_id: '1'},
          {rating: '4', movie_id: '42', user_id: '2'},
         ])
      })
  }