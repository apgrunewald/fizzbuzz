$(document).ready(function () {
	//-----------------------------------------FizzBuzz Begin
    $('#button').click(function () {
    	//-----------------------------------------Input Begin
    	var num = $('#add').val();

		//-----------------------------------------Input End
        for (var i = 1; i <= num; i++) {
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
	//-----------------------------------------FizzBuzz End
});