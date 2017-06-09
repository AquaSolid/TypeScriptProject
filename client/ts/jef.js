/*
 Make a .ts file to change the css property of a button
 */
var banner;
banner = document.getElementById("banner");
banner.innerText = Date();
var i = 0;
function button() {
    if (i % 2 == 0) {
        changeBg();
        i++;
    }
    else {
        changeText();
        i++;
    }
}
var btn_bg = document.getElementById("btn-bg");
function changeBg() {
    btn_bg.style.backgroundColor = "pink";
}
var textBox = document.getElementById("textBox");
function changeText() {
    var text = textBox.innerText;
    textBox.innerText = text + ".jef.";
}
var Person = (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.print = function () {
        var gender;
        if (this.sex == true) {
            gender = "Male";
        }
        else {
            gender = "Female";
        }
        return this.name + " " + this.age.toString() + " " + gender;
    };
    return Person;
}());
var outputBox = document.getElementById("outputBox");
var person = new Person("Jim", 16, true);
outputBox.innerText = person.print();
function Submit() {
    var Name = document.getElementById("name").value;
    var Age = document.getElementById("age").value;
    var Sex = document.getElementById("sexMale").checked;
    var inPerson = new Person(Name, +Age, Sex);
    outputBox.innerText = inPerson.print();
}
