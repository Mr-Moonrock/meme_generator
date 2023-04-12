            // select the input button and display
const image_file = document.getElementById('img_file');
const imgDisplay = document.getElementById('img_display');

            // create variable for image
let uploaded_img = "";

            // add Event Listener to (Choose File) button
image_file.addEventListener('change', function() {
            // Read the file
    const reader = new FileReader();
            // add event listener for (selected image)
    reader.addEventListener('load', () => {
        uploaded_img = reader.result;
            // select the img display (div) and set image inside
        document.getElementById('img_display').style.backgroundImage = `url(${uploaded_img})`;
    });
            // read first file selected
    reader.readAsDataURL(this.files[0]);
    
            // adjust size of picture
    uploaded_img.onload = getSize;
            // create a function to calculate new size
    function getSize() {
            // original H & W
        let height = uploaded_img.height;
        let width = uploaded_img.width;
            // size of display
        let w = img_display.innerwidth;
        let h = img_display.innerheight;

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
        uploaded_image.height = adjH;
        uploaded_image.width = adjW;
    }
});
            // select the buttons
const topInputBtn = document.getElementById('topInputBtn');
const btmInputBtn = document.getElementById('btmInputBtn');

            // add eventlisteners to text top button
topInputBtn.addEventListener('click', function () {
            // select the display and at the text of input
    let top_inputDisplay = document.getElementById('topInput').value;
            // append to img display
    document.getElementById('img_display').innerHTML = top_inputDisplay; 
})
            // Repeat for btm button
btmInputBtn.addEventListener('click', function () {
    let btm_inputDisplay = document.getElementById('btmInput').value;
    document.getElementById('img_display').innerHTML = btm_inputDisplay 
            // adjust to the bottom of div
    });
    
            // function for sliders
            // select the slider
const slider = document.getElementById('slider');
    slider.oninput = fontSizeChange;
            //create the function
function fontSizeChange() {
            // select the display and give slider a value & increments 
    imgDisplay.style.fontSize = slider.value + `px`;
}


            