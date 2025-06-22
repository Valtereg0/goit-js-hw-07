const inTx = document.querySelector("#name-input");
// console.log(inTx);

const outTx = document.querySelector("#name-output");
// console.log(outTx);

inTx.addEventListener("input", () => {
    const name = inTx.value.trim();

    outTx.textContent = name === "" ? "Anonymous" : name;
});
