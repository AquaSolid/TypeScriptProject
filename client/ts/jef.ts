/*
 Make a .ts file to change the css property of a button
 */

let banner: HTMLElement;
banner = document.getElementById("banner");
banner.innerText = Date();

let i: number = 0;

function button() {
    if (i % 2 == 0) {
        changeBg();
        i++;
    } else {
        changeText();
        i++;
    }
}
let btn_bg = document.getElementById("btn-bg");

function changeBg() {
    btn_bg.style.backgroundColor = "pink";
}

let textBox: HTMLElement = document.getElementById("textBox");

function changeText() {
    let text: string = textBox.innerText;
    textBox.innerText = text + ".jef.";
}

class Person {
    private name: string;
    private age: number;
    private sex: boolean;

    constructor(name: string, age: number, sex: boolean) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public print() {
        let gender: string;
        if (this.sex == true) {
            gender = "Male";
        } else {
            gender = "Female";
        }
        return this.name + " " + this.age.toString() + " " + gender;
    }

}
let outputBox: HTMLElement = document.getElementById("outputBox");
let person: any = new Person("Jim", 16, true);
outputBox.innerText = person.print();

function Submit() {
    let Name: string = (<HTMLInputElement>document.getElementById("name")).value;
    let Age: string = (<HTMLInputElement>document.getElementById("age")).value;
    let Sex: boolean = (<HTMLInputElement>document.getElementById("sexMale")).checked;

    let inPerson: any = new Person(Name, +Age, Sex);
    outputBox.innerText = inPerson.print();
}
