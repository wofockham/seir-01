const vocabBuilder = require('../controllers/vocabController');

// Export a function into which the app can be passed, and the routes added.
module.exports = (app) => {
  app
    .route('/words')
    .get(vocabBuilder.list_all_words) // index
    .post(vocabBuilder.create_a_word); // create

  app
    .route('/words/:wordId')
    .get(vocabBuilder.read_a_word) // show
    .put(vocabBuilder.update_a_word) // update
    .delete(vocabBuilder.delete_a_word) // delete
}
