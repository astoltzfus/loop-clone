var board = {
  size: function () {
    // set and return two el array e.g. [6,10] for a 6x10 board
  },
  tiles: function() {
    // set and return tile location
  },
};

Boards = new Mongo.Collection("Boards", {});

Meteor.methods({
  createBoard: function (board) {
  },
});
