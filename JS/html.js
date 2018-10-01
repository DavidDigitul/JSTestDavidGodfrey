/*
utility functions
*/

function elById(ID) {
    return document.getElementById(ID);
}

function decodeHTML(str) {

    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");

    return str;

}
/*
End utility functions
*/



/*
Main html functions
*/
function iterateHtmlArray(array) {

    var str = "";
    var strEnd = "";

    array.forEach((item, index) => {

        //if item is array recurse back throuhg the main function
        if (Array.isArray(item)) {
            str += iterateHtmlArray(item);
        }
        else {
            //generate html based on items within the current array
            if (array.length == 1) {
                str += "<" + item + "/>";
            }
            else {
                if (index == 0) {
                    str = "<" + item + ">";
                    strEnd += "</" + item + ">";
                }
                else {
                    if (!item == "") {
                        str += decodeHTML(item);
                    }
                }
            }
        }

    });

    //return html string
    return str + strEnd;
}
/*
End main html functions
*/



/*
UI input for testing of html array function
*/
function submitHtmlFunction(id) {

    var arr = [];
    var outputString = "";

    switch (id) {
        case 1:
        arr = ["div"];
        outputString = iterateHtmlArray(arr);
        break;
        case 2:
        arr = ["h1", "Text"];
        outputString = iterateHtmlArray(arr);
        break;
        case 3:
        arr = ["span", "More", "Text"];
        outputString = iterateHtmlArray(arr);
        break;
        case 4:
        arr = ["a", ["b", "More"], " Text"];
        outputString = iterateHtmlArray(arr);
        break;
        case 5:
        arr = ["p", "<b>Text</b>"];
        outputString = iterateHtmlArray(arr);
        break;
        case 6:
        arr = ["div", ["a", ["h1", "Even"], "More"], " Text", " And More"];
        outputString = iterateHtmlArray(arr);
        break;
    }

    var outputDiv = elById("ReturnedHtml");

    outputDiv.innerText = outputString;

    return false;

}

/*
End UI functions
*/


