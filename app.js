$(() => {

    $('form').on("submit", (event) => {
        event.preventDefault()
        // seat a var for the user input
        const userInput = $('input[type = "text"]').val()
        console.log(userInput)

        async function getPokeData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            //change the data to json data
            const data = await response.json()
            console.log(data);
            //    $('.pokeImg').html(data.other.official-artwork)
            $('#pokeName').html(data.forms[0].name)
            $('#pokeType').html(data.types[0].type.name)
            $('#pokeNum').html(data.id)
            // console.log($('#pokeType').html(data.types[0].type.name))
            // console.log("image for pokemon")
            // console.log(data.sprites.other.front_default)
            // console.log(data.sprites.other["official-artwork"].front_default)
            document.getElementById("pokeImg").src = data.sprites.other["official-artwork"].front_default

// ----------------changes background color for each type of pokemon-------------------
            if (data.types[0].type.name == "bug") {
                $(".backOfThePage").css("background-color", "#94bc4a")
            } else if(data.types[0].type.name == "dark") {
                $(".backOfThePage").css("background-color", "#736c75")
            } else if(data.types[0].type.name == "dragon") {
                $(".backOfThePage").css("background-color", "#6a7baf")
            } else if(data.types[0].type.name == "electric") {
                $(".backOfThePage").css("background-color", "#e5c351")
            } else if(data.types[0].type.name == "fairy") {
                $(".backOfThePage").css("background-color", "#e397d1")
            } else if(data.types[0].type.name == "fighting") {
                $(".backOfThePage").css("background-color", "#cb5f48")
            } else if(data.types[0].type.name == "fire") {
                $(".backOfThePage").css("background-color", "#ea7a3c")
            } else if(data.types[0].type.name == "flying") {
                $(".backOfThePage").css("background-color", "#7da6de")
            } else if(data.types[0].type.name == "ghost") {
                $(".backOfThePage").css("background-color", "#846ab6")
            } else if(data.types[0].type.name == "grass") {
                $(".backOfThePage").css("background-color", "#71c558")
            } else if(data.types[0].type.name == "ground") {
                $(".backOfThePage").css("background-color", "#cc9f4f")
            } else if(data.types[0].type.name == "ice") {
                $(".backOfThePage").css("background-color", "#70cbd4")
            } else if(data.types[0].type.name == "normal") {
                $(".backOfThePage").css("background-color", "#aab09f")
            } else if(data.types[0].type.name == "poison") {
                $(".backOfThePage").css("background-color", "#b468b7")
            } else if(data.types[0].type.name == "psychic") {
                $(".backOfThePage").css("background-color", "#e5709b")
            } else if(data.types[0].type.name == "rock") {
                $(".backOfThePage").css("background-color", "#b2a061")
            } else if(data.types[0].type.name == "steel") {
                $(".backOfThePage").css("background-color", "#89a1b0")
            } else if(data.types[0].type.name == "water") {
                $(".backOfThePage").css("background-color", "#539ae2")
            }

        }

        getPokeData()
    })
})

// $(() => {
//         if($('#pokeType').html(data.types[0].type.name) == "fairy"){
//             $(".backOfThePage").css("background-color:" , "#e397d1")
//         }

//     })
