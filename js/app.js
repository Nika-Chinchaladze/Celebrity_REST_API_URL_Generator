// FUNCTIONALITY FOR GENERATE BUTTON:
document.querySelector(".generateButton").addEventListener("click", function() {
    var all = $(".allDiv").attr("class");
    var randomTag =  $(".randomDiv").attr("class");
    var searchTag = $(".searchDiv").attr("class");
    var addTag = $(".addDiv").attr("class");
    var updateTag = $(".updateDiv").attr("class");
    var changeTag = $(".changeDiv").attr("class");
    var deleteTag = $(".deleteDiv").attr("class");
    if (all.includes("allHelp")) {
        $(".answerLink1").text("http://peackyblinder.pythonanywhere.com/all");
    }
    if (randomTag.includes("randomHelp")) {
        $(".answerLink2").text("http://peackyblinder.pythonanywhere.com/random");
    }
    if (searchTag.includes("searchHelp")) {
        var current_value = $(".combo").find('option:selected').val();
        switch (current_value) {
            case "first_name":
                $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/first_name?celebrity_name=YourValue");
                break;
            case "last_name":
                $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/last_name?celebrity_surname=YourValue");
                break;
            case "gender":
                $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/gender?celebrity_gender=YourValue");
                break;
            case "movie_genre":
                $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/movie_genre?celebrity_genre=YourValue");
                break;
            case "id":
                $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/id?celebrity_id=YourValue");
                break;
            case "age":
                var operator = $(".comparison").find('option:selected').val();
                switch (operator) {
                    case "=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/age?celebrity_age=YourValue&operator==");
                        break;
                    case ">":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/age?celebrity_age=YourValue&operator=>");
                        break;
                    case "<":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/age?celebrity_age=YourValue&operator=<");
                        break;
                    case ">=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/age?celebrity_age=YourValue&operator=>=");
                        break;
                    case "<=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/age?celebrity_age=YourValue&operator=<=");
                        break;
                }
                break;
            case "followers":
                var operator = $(".comparison").find('option:selected').val();
                switch (operator) {
                    case "=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/followers?celebrity_followers=YourValue&operator==");
                        break;
                    case ">":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/followers?celebrity_followers=YourValue&operator=>");
                        break;
                    case "<":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/followers?celebrity_followers=YourValue&operator=<");
                        break;
                    case ">=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/followers?celebrity_followers=YourValue&operator=>=");
                        break;
                    case "<=":
                        $(".answerLink3").text("http://peackyblinder.pythonanywhere.com/search/followers?celebrity_followers=YourValue&operator=<=");
                        break;
                }
                break;
        }
    }
    if (addTag.includes("addHelp")) {
        $(".answerLink4").text("http://peackyblinder.pythonanywhere.com/add");
    }
    if (updateTag.includes("updateHelp")) {
        var category = $(".combo1").find('option:selected').val();
        $(".answerLink5").text("http://peackyblinder.pythonanywhere.com/update/DetermineID/" + category + "?" + category + "=YourValue&api_key=CorrectKey");
    }
    if (changeTag.includes("changeHelp")) {
        $(".answerLink6").text("http://peackyblinder.pythonanywhere.com/change/DetermineID?first_name=YourValue&last_name=YourValue&gender=YourValue&\nage=YourValue&movie_genre=YourValue&followers=YourValue&img_url=YourValue&api_key=CorrectKey");
    }
    if (deleteTag.includes("deleteHelp")) {
        $(".answerLink7").text("http://peackyblinder.pythonanywhere.com/delete/DetermineID?api_key=CorrectKey");
    }
})

// REMOVE ADDED CLASSES FROM HTML ELEMENTS:
function removeClass() {
    var targetClass = [".allDiv", ".randomDiv", ".searchDiv", ".addDiv", ".updateDiv", ".changeDiv", ".deleteDiv"];
    var helpClass = ["allHelp", "randomHelp", "searchHelp", "addHelp", "updateHelp", "changeHelp", "deleteHelp"];
    for (var i = 0; i < targetClass.length; i++) {
        $(targetClass[i]).removeClass(helpClass[i]);
    }
    $(".addDiv").css("display", "none");
}

// 1. GET All Celebrity Section:
$(".all").click(function(){
    removeClass();
    $(".allDiv").addClass("allHelp");
    $(".answerLink1").text("");
    $(".chosenRequest").text("All");
})

// 2. GET Random Celebrity Section:
$(".random").click(function(){
    removeClass();
    $(".randomDiv").addClass("randomHelp");
    $(".answerLink2").text("");
    $(".chosenRequest").text("Random");
})

// 3. GET Search Celebrity Section:
$(".search").click(function() {
    removeClass();
    $(".searchDiv").addClass("searchHelp");
    $(".answerLink3").text("");
    $(".chosenRequest").text("Search");
})

// 4. POST Add Celebrity Section:
$(".add").click(function() {
    removeClass();
    $(".addDiv").css("display", "block");
    $(".addDiv").addClass("addHelp");
    $(".answerLink4").text("");
    $(".chosenRequest").text("Add");
})

// 5. PATCH Update Celebrity Section:
$(".update").click(function() {
    removeClass();
    $(".updateDiv").addClass("updateHelp");
    $(".answerLink5").text("");
    $(".chosenRequest").text("Update");
})

// 6. PUT change Celebrity Section:
$(".change").click(function() {
    removeClass();
    $(".changeDiv").addClass("changeHelp");
    $(".answerLink6").text("");
    $(".chosenRequest").text("Change");
})

// 7. DELETE remove Celebrity Section:
$(".delete").click(function() {
    removeClass();
    $(".deleteDiv").addClass("deleteHelp");
    $(".answerLink7").text("");
    $(".chosenRequest").text("Remove");
})

// Copy To ClipBoard:
$(".copyButton").click(function() {
    copyRestApi($(this).attr("id"));
})

function copyRestApi(clicked_id) {
    var copyText = null;
    switch (clicked_id) {
        case "allButton":
            copyText = $(".answerLink1").text();
            break;
        case "randomButton":
            copyText = $(".answerLink2").text();
            break;
        case "searchButton":
            copyText = $(".answerLink3").text();
            break;
        case "addButton":
            copyText = $(".answerLink4").text();
            break;
        case "updateButton":
            copyText = $(".answerLink5").text();
            break;
        case "changeButton":
            copyText = $(".answerLink6").text();
            break;
        case "removeButton":
            copyText = $(".answerLink7").text();
            break;
    }
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}