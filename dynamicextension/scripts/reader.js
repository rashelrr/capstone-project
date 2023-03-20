var currentURL = window.location.href;
var htmlCode;

console.log(currentURL);

var htmlCode;
// Stack Overflow: https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url
// Stack Overflow: https://stackoverflow.com/questions/2014570/save-data-from-ajax-request-in-variable-jquery
$.ajax({
    url: currentURL,
    success: function(data) {
        useReturnData(data)
    },
    dataType: "html"
});

function useReturnData(data){
    htmlCode = data;
    console.log(typeof htmlCode);
    console.log(htmlCode);
};

waitForElement();

// Stack Overflow: https://stackoverflow.com/questions/7307983/while-variable-is-not-defined-wait
// Waits until htmlCode is defined
function waitForElement() {
    if (typeof htmlCode != "undefined") {
        // variable exists, do what you want
        checkLevel1(htmlCode);
        checkLevel2(htmlCode);
    } else {
        setTimeout(waitForElement, 250);
    }
}

function checkLevel1(htmlCode) {
    // Level 1: Use accessible methods to implement error messages

    // Level 1: Implement validation and notification to minimize interruptions
    // For dynamically updated list of errors that do not reload, add aria-live="alert" or aria-live="polite" on the container for the messages
    // alert = screen reader immediately announces the updated content
    // polite = announces when the user has paused typing
    if (htmlCode.includes("error") && !(htmlCode.includes("aria-live"))) {
        console.log("WARNING: Dynamically updated errors may not be properly prioritized for screen reading.");
    }

}

function checkLevel2(htmlCode) {
    // Level 2: Ensure Esc dismisses new content
    // Ensure that the Esc key dismisses any new content revealed on hover or keyboard focus
    // Intercept the Esc key press and ensure that Esc doesn't also get executed on an element in the underlying layer
    // Need JavaScript to get hover text???
    if (checkforHover(htmlCode) && !(htmlCode.includes(".key == Escape"))) {
        console.log("WARNING: Dynamic content may not be able to be dismissed with the Esc key.");
    }
    // Level 2: If content appears on hover, the new content needs to remain visible until dismissed
    // Level 2: Moving the pointer away from the trigger should not be the action that dismisses the new content
    // Level 2: Ensure custom tooltips and similar hover text can be triggered by keyboard
}

// Need to get JavaScript to properly check for hover content?
// This function should check if the page has hover content
function checkforHover(htmlCode) { // how to check for hover?
    var hoverExists = 0;
    var keywords = ["tooltip"]
    for (let i = 0; i < keywords.length; i++) {
        if (htmlCode.includes(keywords[i])) {
            hoverExists = 1;
        }
    }
    // if (Element.matches(':hover')) {
    //     hoverExists = 1;
    // }
    if (window.matchMedia( "(hover: none)").matches) {
        // hover unavailable
        hoverExists = 0;
    }
    return hoverExists;
}


//$("body").append($("<div id='mydiv'><img src='" + srcofimg + "'</div>")); // if image
