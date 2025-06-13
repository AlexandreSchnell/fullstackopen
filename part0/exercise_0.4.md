```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: write a note in the input and click submit
    browser->>server: sends data via POST to https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    server-->server: saves the data sent by the browser
    server-->>browser: redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note right of browser: browser executes the callback which renders the notes, calling the files (main.css, main.js and data.json)

    browser-->>user: show the notes with the new note added by the user
