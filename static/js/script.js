// your age in days
function ageInDays() {
    var birthYear = prompt("what year were you born friend");
    var ageConverter = (new Date().getFullYear() - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are "+ ageConverter+" days old");
    h1.setAttribute('id','ageConverter');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset() {
    document.getElementById('ageConverter').remove()
}
function addCats() {
    var cat = document.createElement('img')
    var div = document.getElementById("catGenDiv")
    cat.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(cat)
    
}

