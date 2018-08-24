var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$( document ).ready(function() {
    getRandomQuote();
});

$("#botao-frase").click(getRandomQuote);

//Usando a api como diz a documentação
//com headers --> method=getQuote, format=jsonp e lang=en --> retornando um json

function getRandomQuote() {
	$("#spinner").toggle();
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(getQuote)
    .fail(function(){
        $("#erro").css('display','block');
    })
    .always(function(){
    	$("#spinner").toggle();
    });
}

function getQuote(data) {
    $(".frase").text(data.quoteText);
    $(".autor").text(data.quoteAuthor);
    $('#share-twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor));
    $("#erro").css('display','none');
}
