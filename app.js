function saveNote() {
    const textNote = document.querySelector('.note-area').value;
    const keyNote = Date.now().toString();
    localStorage.setItem(keyNote, textNote);
    createNote(keyNote,textNote);
}

function deleteNote(keyNote){
    
}

function createNote(keyNote, textNote){
    const div = document.createElement('div');
    div.id = keyNote;
    const text = document.createTextNode(textNote);
    div.appendChild(text);

    const button = document.createElement('button');
    button.textContent ='Delete';
    div.appendChild(button);
    document.querySelector('.notes').appendChild(div);
}

function init(){
    Object.keys(localStorage).forEach((keyNote) => {
        const textNote = localStorage.getItem(keyNote);
        createNote(keyNote,textNote);
    });
}

init();
