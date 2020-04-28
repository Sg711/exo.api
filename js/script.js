$('form').submit(function()){

    e.preventDefault();

    let cityName = $('.city-name').val();

    if(cityName.length <1 ){
        $('#view').html('<p class="red">Champ vide !</p>');
    } else {

    }
}