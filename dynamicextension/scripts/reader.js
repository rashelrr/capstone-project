var currentURL = window.location.href;

console.log(currentURL);

var htmlCode;
// Stack Overflow: https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url
// Stack Overflow: https://stackoverflow.com/questions/2014570/save-data-from-ajax-request-in-variable-jquery
$.ajax({
    url: currentURL,
    success: function(data) {
        useReturnData(data)
    }
});

function useReturnData(data){
    htmlCode = data;
    console.log(htmlCode);
};

// Level 1: Use accessible methods to implement error messages
// Inject error messages in the correct reading order in the DOM.
// If a suggestion for fixing an error is provided, associate it with the input element using aria-describedby.
// Set the aria-invalid attribute to “true” on elements with an input error (and remove it once the error is fixed).
// Use alert role or aria-live regions to surface error messages that do not take focus.
