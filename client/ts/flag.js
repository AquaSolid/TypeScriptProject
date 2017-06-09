function change_color() {
    var lines = document.getElementsByClassName("foo");
    var attributes = ["background: red;", "background: white;", "background: blue;"];
    console.log(lines);
    for (var i = 0; i < lines.length; i++) {
        console.log(i);
        console.log(lines[i]);
        lines[i].setAttribute("style", attributes[i]);
    }
}
