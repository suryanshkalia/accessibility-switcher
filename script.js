const modes = ["high-contrast", "large-text", "dyslexia-mode"];

function setMode(mode){
    document.body.classList.remove(...modes);

    if ( mode != "default"){
        document.body.classList.add(mode);
    }

    const settings = loadSettings();

    settings.mode = mode;

    saveSettings(settings);

    document.getElementById("modeLabel").innerText = "Mode: " + formatMode(mode);

    document.getElementById("modeLabel").innerText = "Mode: " + mode;

    const status = document.getElementById("statusText");

    if (mode == "default") {
        status.innerText = "Accessibility: OFF";
    }else{
        status.innerText = "Accessibility: ON";
    }
}

function formatMode(mode){
    if (mode == "high-contrast") return "High Contrast";
    if ( mode == "large-text") return "Large Text";
    if ( mode == "dyslexia-mode") return "Dyslexia";
    return "default";
}

window.onload = function(){
    const settings = loadSettings();

    setMode(settings.mode);
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

const settings = {
    mode: "default"
};

function saveSettings(settings) {
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
}

function loadSettings() {
    const data = localStorage.getItem("accessibilitySettings")
    return data ? JSON.parse(data) : { mode : "default" }
}

function togglePanel() {
    const panel = document.getElementById("panelContent");

    panel.style.display = panel.style.display == "block" ? "none" : "block";
}
