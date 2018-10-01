/*
utility functions
*/

function elById(ID) {
    return document.getElementById(ID);
}

function hexToRgb(hex) {
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function validateHex(color) {

    var isOk = /^[0-9A-F]{6}$/i.test(color);

    return (isOk);
}

function getMean(val1, val2) {
    var mean = 0;

    mean = Math.round((val1 + val2) / 2);

    return mean;
}
/*
End utility functions
*/



/*
Main Color functions
*/
function averageColor(color1, color2, rgb) {

    //get rgb arrays
    var color1Result = hexToRgb(color1);
    var color2Result = hexToRgb(color2);

    //get mean of r
    var r = getMean(parseInt(color1Result[1], 16),
        parseInt(color2Result[1], 16));
    //get mean of g
    var g = getMean(parseInt(color1Result[2], 16),
        parseInt(color2Result[2], 16));
    //get mean of b
    var b = getMean(parseInt(color1Result[3], 16),
        parseInt(color2Result[3], 16));

    if (rgb) {
        //return new color
        return ["rgb(", r, ",", g, ",", b, ")"].join("");
    }
    else {
        return rgbToHex(r, g, b);
    }

}
/*
End Main Color functions
*/



/*
UI input for testing of colory function
*/
function submitColorFunction() {

    //get color 1
    var color1 = elById("color1").value;
    //get color 2
    var color2 = elById("color2").value;

    //get feedback div's'
    var infoDev = elById("colorInfo");
    var feedbackDiv = elById("colorDisplay");


    //if both string validate then run the function to get the average color
    if (validateHex(color1) && validateHex(color2)) {
        infoDev.innerHTML = "";
        var meanColor = averageColor(color1, color2, true);
        feedbackDiv.setAttribute
            ("style", "background-color:" + meanColor + ";");
        infoDev.innerHTML = meanColor;
    }
    else {
        infoDev.innerHTML = "Please supply two valid color strings...";
        feedbackDiv.setAttribute
            ("style", "background-color: #ffffff;");
    }


    return false;
}

/*
End UI input for testing of colory function
*/
