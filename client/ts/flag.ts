function change_color() {
    let lines:any = document.getElementsByClassName("foo");
    let attributes: Array<string> =
        ["background: red;", "background: white;", "background: blue;"];
    console.log(lines);
    for (let i:number = 0; i < lines.length; i++) {
        console.log(i);
        console.log(lines[i]);
        lines[i].setAttribute("style", attributes[i]);
    }
}
