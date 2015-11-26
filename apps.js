$(document).ready(function () {
    $('#button').click(function () {
        for (var i = 1; i <= 100; i++) {
            if (i % 15 === 0) {
                $('#list').append('</br>' + 'FizzBuzz')
            } else if (i % 5 === 0) {
                $('#list').append('</br>' + 'Buzz')
            } else if (i % 3 === 0) {
                $('#list').append('</br>' + 'Fizz')
            } else {
                $('#list').append('</br>' + i);
                $('#add').val("");
            }
        }
	});
});