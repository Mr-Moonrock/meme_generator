document.getElementById('meme-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const imageUrl = document.getElementById('image-url').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;

    document.getElementById('meme-form').reset();

    const memesContainer = document.getElementById('memes-container');
    memesContainer.innerHTML = '';

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    const img = document.createElement('img');
    img.src = imageUrl;

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('text-top');
    topTextDiv.innerText = topText;

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('text-bottom');
    bottomTextDiv.innerText = bottomText;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        memeDiv.remove(); 
    });

    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);

    memesContainer.appendChild(memeDiv);
});