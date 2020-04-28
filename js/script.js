$('form').submit(function()){

    e.preventDefault();

    let cityName = $('.city-name').val();

    if(cityName.length <1 ){
        $('#view').html('<p class="red">Champ vide !</p>');
    } else {

        let cityTable = $('<thead><tr><th>Nom</th><th>Code Postal</th><th>Nombre d\'habitants</th><th>Département</th></tr></thead>');

        data.forEach(function(city){

            let newCity = $('<tr></tr>')

            let cityName = $('<td></td>');
            cityName.text(city.nom);

            let cityZipCode = $('<td></td>');
            cityZipCode.text(city.zipCode);

            let cityPeopleNumber = $('<td></td>');
            cityPeopleNumber.text(city.peopleNumber);

            let cityDepartment = $('<td></td>');
            cityDepartment.text(city.department);

            newCity.append(cityName);
            newCity.append(cityZipCode);
            newCity.append(cityPeopleNumber);
            newCity.append(cityDepartment);

            cityTable.find('tbody').append(newCity);
            console.log(city.peopleNumber);
        });

        $('table').html(cityTable);

    }
}