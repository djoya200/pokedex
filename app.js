//link for api for pokemon
//onlcik ufnction to acutally search for info
//be able to input users search into the api
//populate the data
// fetch the data
//async await to grab data
// prevent default into form population

// runs the whole thing

console.log('app.js connected')
//document.ready function
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
            $('#pokeName').html(data.forms[0].name)
            console.log("data.types[0].type[0]")
            console.log(data.types[0].type.name)
            $('#pokeType').html(data.types[0].type.name)
        }

        getPokeData()
    })
})

