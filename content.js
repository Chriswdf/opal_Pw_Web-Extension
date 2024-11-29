// ready for takeoff
const username = "";
const pw = "";

console.log("content.js loaded");

const usernameElement = document.querySelector("input[name='j_username']");
const passwordElement = document.querySelector("input[name='j_password']");

if (usernameElement && passwordElement) {
    console.log("elements for username and password found");
    usernameElement.value = username;
    console.log(`username set`);
    passwordElement.value = pw;
    console.log(`password set`);

    const submitButton = document.querySelector("button[name='_eventId_proceed']");

    if (submitButton) {
        submitButton.click();
        console.log("Button 'Anmelden' clicked")
    } else {
        console.error("Button 'Anmelden' not found.");
    }

} else if (!passwordElement) {
    console.error("<input>-element with name 'j_password' not found");
} else if (!usernameElement) {
    console.error("<input>-element with name 'j_username' not found");
}