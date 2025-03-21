"use strict";

$(document).ready(function () {
  $('#todo-form').submit(function (event) {
    event.preventDefault();
    var todoText = $('#todo-input').val().trim();
    if (todoText !== "") {
      var todoItem = "\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                            <span class=\"todo-text\">".concat(todoText, "</span>\n                            <div>\n                                <button class=\"btn btn-success btn-sm mark-complete\">\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043E</button>\n                                <button class=\"btn btn-danger btn-sm delete-todo\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                            </div>\n                        </li>");
      $('#todo-list').append(todoItem);
      $('#todo-input').val("");
    }
  });
  $(document).on('click', '.mark-complete', function () {
    $(this).closest('li').find('.todo-text').toggleClass('completed');
  });
  $(document).on('click', '.delete-todo', function () {
    $(this).closest('li').remove();
  });
  $(document).on('click', '.todo-text', function () {
    var todoText = $(this).text();
    $('#modal-todo-content').text(todoText);
    $('#todoModal').modal('show');
  });
});