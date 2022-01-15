const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", () => {
    showImg.innerHTML = "";
    const checkEvo = Math.floor(Math.random() * 10);
    
    const first = document.createElement("div");
    first.innerHTML = `
    <img src ="./img/evolution1.png" alt="原人">
    `;
    showImg.appendChild(first);
    const firstWord = document.createElement('p');
    firstWord.innerHTML = '原人';
    first.appendChild(firstWord);

    if (checkEvo >= 4) {
        const second = document.createElement("div");
        second.innerHTML = `
        <img src ="./img/evolution2.png" alt="原人">
        <p>旧人</p>`;
        showImg.appendChild(second);
    }

    if (checkEvo >= 7) {
        const third = document.createElement("div");
        third.innerHTML = `
        <img src ="./img/evolution3.png" alt="原人">
        <p>新人</p>`;
        showImg.appendChild(third);
    }
    if (checkEvo >= 9) {
        const fourth = document.createElement("div");
        fourth.innerHTML = `
        <img src ="./img/evolution4.png" alt="原人">
        <p>現代人</p>`;
        showImg.appendChild(fourth);        
    }
});

resetBtn.addEventListener("click", () => {
    showImg.innerHTML = "";
    // showImg.slice(0, -1);
});