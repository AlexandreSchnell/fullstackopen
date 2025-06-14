```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: write a note in the input and click submit
    browser->>server: send data via AJAX POST to https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->server: save the data sent by the browser
    server-->>browser: return message that the data was saved/created
    deactivate server

    browser->>browser: create a new HTML element with the input data from the user
    browser-->>user: render the HTML element on the page
