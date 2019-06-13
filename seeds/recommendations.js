exports.seed = function (knex, Promise) {
    return knex('recommendations').del()
      .then(function () {
        return knex('recommendations').insert([
            {rec: 'Inception', movie_id: '18', user_id: '1'},
            {rec: 'Alien', movie_id: '3', user_id: '2'},
            {rec: 'Robocop', movie_id: '27', user_id: '3'},
            {rec: 'Pacific Rim', movie_id: '24', user_id: '4'},
            {rec: 'Total Recall', movie_id: '39', user_id: '5'},
            {rec: 'Looper', movie_id: '21', user_id: '6'},
            {rec: 'Starship Troopers', movie_id: '32', user_id: '7'},
            {rec: 'The Thing', movie_id: '38', user_id: '8'},
            {rec: 'Geostorm', movie_id: '16', user_id: '9'},
            {rec: 'Transformers', movie_id: '40', user_id: '10'},
         ])
      })
  }