var ratingApiPort = "8000";
var baseUrl_RatingAPI = window.location.origin;

function getTheUserNameActiviteit() 
{
    var naam = document.getElementById("activiteit_usernaam").innerHTML;
    return naam;
}

function getRatingUser(itemsource)
{
    console.log("Hier moet de SOAP functie komen");
    var port = ratingApiPort;


    var score = -1;
    var userId = 'no_value_given_userId';
    var itemSource = "test";
    var itemId = "test";
    var query = 'getRatingUser';

    usernaam = getTheUserNameActiviteit();

    let content = 
    {
        score: score,
        userId: usernaam,
        itemSource: itemSource,
        itemId: itemId,
        query: query
    };
    fetch(baseUrl_MateriaalAPI + port + "/SOAPRatingXML.php", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(content)
    })
        .then(response => response.json())
        .then(json => {
        data = json.uitkomst;
        console.log(data);
        })
        .catch(err => console.log(err));
}

function setRating(rating)
{
    var port = ratingApiPort;
    var score = -1;
    var userId = 'no_value_given_userId';
    var itemSource = "test";
    var itemId = "test";
    var query = 'voegRatingToe';

    userId = getTheUserNameActiviteit();
    score = rating;


    let content = 
    {
        score: score,
        userId: userId,
        itemSource: itemSource,
        itemId: itemId,
        query: query
    };
    fetch(baseUrl_RatingAPI  + "/SOAPRatingXML.php", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(content)
    })
        .then(response => response.json())
        .then(json => {
        data = json.uitkomst;
        console.log(data);
        })
        .catch(err => console.log(err));


}


function getRating()
{
    
}