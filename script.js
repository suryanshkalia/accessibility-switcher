const modes = ["high-contrast", "large-text", "dyslexia-mode"];

function toggleMode(mode){
    document.body.classList.toggle(mode);

    updateSettings();
    updateUI();
}

function resetModes(){
    document.body.classList.remove(
        "high-contrast",
        "large-text",
        "dyslexia-mode"
    );

    updateSettings();
    updateUI();
}

function formatMode(mode){
    if (mode == "high-contrast") return "High Contrast";
    if ( mode == "large-text") return "Large Text";
    if ( mode == "dyslexia-mode") return "Dyslexia";
    return "default";
}

window.onload = function(){
    const settings = loadSettings();

    settings.modes.forEach(mode => {
        document.body.classList.add(mode);
    })

    updateUI();
}

function updateUI(){
    const modes = [];

    if( document.body.classList.contains("high-contrast"))
        modes.push("High Contrast");

    if( document.body.classList.contains("large-text"))
        modes.push("Large Text");

    if( document.body.classList.contains("dyslexia-mode"))
        modes.push("Dyslexia");

    const label = document.getElementById("modeLabel");

    label.innerText = modes.length ? "Active: " + modes.join(", ") : "Mode: Default";
}

document.addEventListener("keydown", function(e){
    if (!e.ctrlKey) return;

    const key = e.key.toLowerCase();

    e.preventDefault();

    if ( key === "h" ) toggleMode("high-contrast");
    if ( key === "l" ) toggleMode("large-text");
    if ( key === "d" ) toggleMode("dyslexia-mode");
    if ( key === "r" ) resetModes();
});

function updateSettings(){
    const activeModes = [];

    if (document.body.classList.contains("high-contrast"))
        activeModes.push("high-contrast");

    if (document.body.classList.contains("large-text"))
        activeModes.push("large-text");

    if (document.body.classList.contains("dyslexia-mode"))
        activeModes.push("dyslexia-mode");

    localStorage.setItem("accessibilitySettings", JSON.stringify({
        modes: activeModes
    }));
}

function loadSettings() {
    const data = localStorage.getItem("accessibilitySettings")
    return data ? JSON.parse(data) : { modes : [] };
}

function togglePanel() {
    const panel = document.getElementById("panelContent");

    panel.style.display = panel.style.display == "block" ? "none" : "block";
}
