"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB =
/*#__PURE__*/
function () {
  function DB() {
    _classCallCheck(this, DB);
  }

  _createClass(DB, [{
    key: "addToDB",
    value: function addToDB(task) {
      console.log(task);
      var tasks = this.getFromDB();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, {
    key: "getFromDB",
    value: function getFromDB() {
      var tasks;

      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      return tasks;
    }
  }, {
    key: "removeFromDB",
    value: function removeFromDB(task) {
      var tasks = this.getFromDB();

      if (tasks.length != 0) {
        tasks = tasks.filter(function (t) {
          return t.addValue !== task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }, {
    key: "clearDB",
    value: function clearDB() {
      localStorage.clear();
    }
  }]);

  return DB;
}();

exports["default"] = DB;