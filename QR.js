const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr_code img");



generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return //if the input is empty is not gonna show anything
    //preValue = qrValue;
    //console.log(qrValue);
    generateBtn.innerText = "Generating QR Code ...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generatin QR Code";  
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = ""
    }
})