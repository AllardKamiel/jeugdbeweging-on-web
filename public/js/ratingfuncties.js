var ratingApiPort = "8000";
var baseUrl_RatingAPI = window.location.origin;

function getTheUserNameActiviteit() {
    var naam = document.getElementById("activiteit_usernaam").innerHTML;
    return naam;
}

function getRating(userIdinput, itemSourceinputInt, itemIdinput, ratingstr) {
    var port = ratingApiPort;
    var score = -1;
    var userId = 'no_value_given_userId';
    var itemSource = "no_value_given_itemSource";
    var itemId = "no_value_given_itemId";
    var query = 'getRating';

    if (itemSourceinputInt == 0) {
        itemSource = "Materiaal";
    } else if (itemSourceinputInt == 1) {
        itemSource = "Activiteit";
    }
    if (itemIdinput != "") {
        itemId = itemIdinput;
    }

    userId = userIdinput;

    let content =
    {
        score: score,
        userId: userId,
        itemSource: itemSource,
        itemId: itemId,
        query: query
    };
    fetch(baseUrl_RatingAPI + "/SOAPRatingXML.php", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(content)
    })
        .then(response => response.json())
        .then(json => {
            data = json.uitkomst;
            console.log(data);
            //TODO set both ratingvalue elements to the rating

            document.getElementById("materiaalitem_rating").innerHTML = ratingstr + data + "/5";
        })
        .catch(err => console.log(err));
}

function addRating(rating, userIdinput, itemSourceinputInt, itemIdinput) {
    var port = ratingApiPort;
    var score = -1;
    var userId = 'no_value_given_userId';
    var itemSource = "no_value_given_itemSource";
    var itemId = "no_value_given_itemId";
    var query = 'voegRatingToe';
    score = rating;
    if (itemSourceinputInt == 0) {
        itemSource = "Materiaal";
    } else if (itemSourceinputInt == 1) {
        itemSource = "Activiteit";
    }
    if (itemIdinput != "") {
        itemId = itemIdinput;
    }

    userId = userIdinput;

    let content =
    {
        score: score,
        userId: userId,
        itemSource: itemSource,
        itemId: itemId,
        query: query
    };
    fetch(baseUrl_RatingAPI + "/SOAPRatingXML.php", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(content)
    })
        .then(response => response.json())
        .then(json => {
            data = json.uitkomst;
            console.log(data);
            //TODO set both ratingstatus elements to the rating
            document.getElementById("materiaalrating_status").innerHTML = data;
        })
        .catch(err => console.log(err));
}

function deleteRating(userIdinput, itemSourceinputInt, itemIdinput) {
    var port = ratingApiPort;
    var score = -1;
    var userId = 'no_value_given_userId';
    var itemSource = "no_value_given_itemSource";
    var itemId = "no_value_given_itemId";
    var query = 'deleteRating';
    if (itemSourceinputInt == 0) {
        itemSource = "Materiaal";
    } else if (itemSourceinputInt == 1) {
        itemSource = "Activiteit";
    }
    if (itemIdinput != "") {
        itemId = itemIdinput;
    }

    userId = userIdinput;

    let content =
    {
        score: score,
        userId: userId,
        itemSource: itemSource,
        itemId: itemId,
        query: query
    };
    fetch(baseUrl_RatingAPI + "/SOAPRatingXML.php", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(content)
    })
        .then(response => response.json())
        .then(json => {
            data = json.uitkomst;
            console.log(data);
            //TODO set both ratingstatus elements to the rating
            //
        })
        .catch(err => console.log(err));
}