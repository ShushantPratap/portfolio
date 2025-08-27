let langOption = document.querySelectorAll("select");
let fromText = document.querySelector(".fromText");
let transText = document.querySelector(".toTranslate");
let fromVoice = document.querySelector(".from");
let toVoice = document.querySelector(".to");
let copyBtn = document.querySelector(".fa-clone");
let countValue = document.querySelector(".code_length");
let exchangeLang = document.querySelector(".fa-arrow-right-arrow-left");

langOption.forEach((get, con) =>{
    for(let countryCode in language){
        let selected;
        if(con == 0 && countryCode == "en-GB"){
            selected = "selected";
        }else if(con == 1 && countryCode == "hi-IN"){
            selected = "selected";
        }
        let option = `<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML("beforeend", option);
    }
    get.addEventListener("change", ()=>{
        app();
    });
});

function app(){
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;

    let transLINK = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLINK).then(translate => translate.json()).then(data => {
        transText.value = data.responseData.translatedText;
    });
}

fromText.addEventListener("input", ()=>{
    app();
});

fromVoice.addEventListener("click", ()=>{
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromText.value);
    fromTalk.lang = langOption[0].value;
    speechSynthesis.speak(fromTalk);
});

toVoice.addEventListener("click", ()=>{
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(transText.value);
    fromTalk.lang = langOption[1].value;
    speechSynthesis.speak(fromTalk);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(transText.value);
});

fromText.addEventListener("click", ()=>{
    countValue.innerHTML = `${fromText.value.length}/5,000`;
});

exchangeLang.addEventListener("click", ()=>{
    let tempText = fromText.value;
    fromText.value = transText.value;
    transText.value = tempText;

    let tempOpt = langOption[0].value;
    langOption[0].value = langOption[1].value;
    langOption[1].value = tempOpt;
});