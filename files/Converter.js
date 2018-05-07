
$(function(){

	// API call
	$.get('https://api.fixer.io/latest?base=CAD', function(data){

		var countryObject = data.rates;

		// Conversion calculation
		$('form').on('submit', function(e){
			e.preventDefault();

			var convertingTo = "USD",
				toRate = countryObject[convertingTo],
				amount = $('.currencyValue').val();

			var calculation = amount * toRate;

			if(calculation === 0) {
				$('.output').html('Please enter a valid amount.');
			} else {
                $('.output').html("$");
				$('.output').html(parseFloat(calculation).toFixed(2));
			}
		});

	});

});