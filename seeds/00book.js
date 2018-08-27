
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
  .then(() => {
    return knex.raw("ALTER SEQUENCE student_id_seq RESTART WITH 1;");})
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
