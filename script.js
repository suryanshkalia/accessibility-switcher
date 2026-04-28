const modes = ["high-contrast", "large-text", "dyslexia-mode"];

const status = document.getElementById("statusText");

if (mode == "default") {
    status.innnerText = "Accessibility: OFF";
}else{
    status.innnerText = "Accessibility: ON";
}

function setMode(mode){
    document.body.classList.remove(...modes);

    if ( mode != "default"){
        document.body.classList.add(mode);
    }

    localStorage.setItem("mode", mode);

    document.getElementById("modeLabel").innerText = "Mode: " + mode;
}

window.onload = function(){
    const savedMode = localStorage.getItem("mode") || "default";
    setMode(savedMode);
    switcher.value = savedMode;
}

document.addEventListener("keydown", function(e){
    const tag = e.target.tagName;

    if ( tag == "INPUT" || tag == "TEXTAREA" ) return;

    if (!e.ctrlKey) return

    const key = e.key.toLowerCase();

    if( key == "h") setMode("high-contrast");
    if( key == "l") setMode("large-text");
    if( key == "d") setMode("dyslexia-mode");
    if( key == "r") setMode("default")

});

function togglePanel() {
    const panel = document.getElementById("panelContent");

    panel.style.display = panel.style.display == "block" ? "none" : "block";
}
