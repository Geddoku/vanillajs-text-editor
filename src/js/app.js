class UI {

}

class BL {
    static getHighlightedText() {
        var t = '';
            function gText(e) {
            t = (document.all) ? document.selection.createRange().text : document.getSelection();

            document.getElementById('input').value = t;
            localStorage.setItem('highlighted', t);
        }

        document.onmouseup = gText;
        if (!document.all) document.captureEvents(Event.MOUSEUP);
    }

    static changeTextToBold() {
        document.getElementById('textBold').addEventListener('click', function() {
            const userText = document.getElementById('textArea').textContent;
            let highlightedText = localStorage.getItem('highlighted');
            let indexOfItem = userText.indexOf(highlightedText);
            document.getElementById('textArea').innerHTML = highlightedText.bold();
            console.log(indexOfItem);
        });
    }
}

class DL {

}

const init = () => {
    BL.getHighlightedText();
    BL.changeTextToBold();
}
init();
