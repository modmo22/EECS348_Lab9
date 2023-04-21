function validate() {
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;


    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (pass1 !== pass2) {
        alert("The passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}

var picture_index = 0;

function prev() {
    picture_index = ((picture_index + 5) - 1) % 5
    var picture_uri = `pictures/${picture_index}.jpeg`
    document.getElementById("picture").src = picture_uri
}

function next() {
    picture_index = (picture_index + 1) % 5
    var picture_uri = `pictures/${picture_index}.jpeg`
    document.getElementById("picture").src = picture_uri
}

function alert_paragraph_color() {
    let border_R = document.getElementById("border_Red").value;
    let border_G = document.getElementById("border_Green").value;
    let border_B = document.getElementById("border_Blue").value;
    let border_width = document.getElementById("border_Width").value;
    let bg_R = document.getElementById("bg_Red").value;
    let bg_G = document.getElementById("bg_Green").value;
    let bg_B = document.getElementById("bg_Blue").value;

    let tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width;
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}