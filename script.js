// mi API KEY haw2xX1UR3d8vaADfENsloH2Zmv6r6my
// SEARCH ENDPOINT https://api.giphy.com/v1/gifs/search?api_key=haw2xX1UR3d8vaADfENsloH2Zmv6r6my&q=dog&limit=20&rating=r
$(document).ready(function() {

// Start your code from here

let animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
  ];


  function populateButtons(array){
    $("#animal-buttons").empty();

array.forEach(element => {
    
    var a = $("<button>");
    a.text(element)
    a.addClass("animal-button")
    a.attr("data-type",element)
    $("#animal-buttons").append(a);
});
}

// La logica del click de cada boton para hacer la llamda al API
$("#animal-buttons").on("click", ".animal-button", function() {
//alert('click')
    let animalName = $(this).attr("data-type")
    //alert(animalName)
    // VOY A PONER DESPUES LO QUE ES LA API PARA QUE LA LEA
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=haw2xX1UR3d8vaADfENsloH2Zmv6r6my&q="${animalName}"&limit=10&rating=r`; 
    //$("#animals").empty();
    //console.log(queryURL)


    $.get(queryURL,function(response){
        let responseData = response.data
        console.log(responseData)
        /*
        let paraListaDatos = 20
        console.log(paraListaDatos)
        */
             
        for (let i=0; i < responseData.length; i++){

       $("#animals").append(`<img src= '${response.data[i].images.fixed_height_still.url}' data-still = '${response.data[i].images.fixed_height_still.url}'
       data-animate = '${response.data[i].images.fixed_height.url}' image-state="still" class='animal-image'> <h5>Rating de GIF: '${response.data[i].rating}' </h5>`)
        }    
    })
})

// La lógica del click de cada imagen para "intercambiar las urls"
$("#animals").on("click", ".animal-image", function(){

    

    if ('image-state' == 'still') {       
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("image-state", "still");
    }
    else {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("image-state", "animate");

    }

})
// no me salio :V preguntar al profe

// La lógica del formulario para agregar mas botones a la lista
$("#add-animal").on("click", function(e) {
    e.preventDefault();

    let valor = $("#animal-input").val()
    $("#animal-buttons").append(`<button class = "animal-button" data-type="element" >${valor} </button> `)


})





populateButtons(animals);
});
