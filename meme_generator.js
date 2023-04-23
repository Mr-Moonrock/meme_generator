// select the input button and display
const imageFile = document.getElementById('imgFile');
const imgDisplay = document.getElementById('imgDisplay');

// create variable for image
let uploadedImg = "";

// add Event Listener to (Choose File) button
// Read the file
// add event listener for (selected image)
// select the img display (div) and set image inside
// read first file selected
imageFile.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
        uploadedImg = reader.result;
        document.getElementById('imgDisplay').style.backgroundImage = `url(${uploadedImg})`;});
    reader.readAsDataURL(this.files[0]);     
    uploadedImg.onload = getSize;
});
// adjust size of picture
// original H & W
// size of display
function getSize() {
    let height = uploadedImg.height;
    let width = uploadedImg.width;
    let w = imgDisplay.innerwidth;
    let h = imgDisplay.innerheight;
//formula = original w * new h / original h = new w
// formula = original h * new w / original w = new h
// adjusted H & W
    let adjH = height * (w / width);
    let adjW = w;
    if(adjH > h) {
    let wRatio = h / adjH;
        adjH = h;
        adjW = wRatio * w;
    }
    uploadedImage.height = adjH;
    uploadedImage.width = adjW;
}
// select the buttons
const topInputBtn = document.getElementById('topInputBtn');
const btmInputBtn = document.getElementById('btmInputBtn');

// add eventlisteners to text top button
// select the display and at the text of input
// append to img display
topInputBtn.addEventListener('click', function () {
    let topInputDisplay = document.getElementById('topInput').value;
    document.getElementById('imgDisplay').innerHTML = topInputDisplay; 
})
// Repeat for btm button
btmInputBtn.addEventListener('click', function () {
    let btmInputDisplay = document.getElementById('btmInput').value;
    document.getElementById('imgDisplay').innerHTML = btmInputDisplay;
    });
// adjust to the bottom of div

// function for sliders
// select the slider
const slider = document.getElementById('slider');
    slider.oninput = fontSizeChange;

//create the function
// select the display and give slider a value & increments
function fontSizeChange() {     
    imgDisplay.style.fontSize = slider.value + `px`;
};


            