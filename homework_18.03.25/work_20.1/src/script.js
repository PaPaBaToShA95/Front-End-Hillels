$(document).ready(function () {
    $('#todo-form').submit(function (event) {
        event.preventDefault();

        let todoText = $('#todo-input').val().trim();

        if (todoText !== "") {
            let todoItem = `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="todo-text">${todoText}</span>
                            <div>
                                <button class="btn btn-success btn-sm mark-complete">Виконано</button>
                                <button class="btn btn-danger btn-sm delete-todo">Видалити</button>
                            </div>
                        </li>`;
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
        let todoText = $(this).text();
        $('#modal-todo-content').text(todoText);
        $('#todoModal').modal('show');
    });
});