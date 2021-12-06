/**
 * Create JSON filled with information for posts
 */

let posts = [
    {
        'profile_pic': './img/software_round.jpg',
        'author': 'Programmier-Insider',
        'image': './img/software.jpg',
        'description': 'Mit JavaScript lassen sich dynamische Websiten und Apps gut programmieren!',
        'location': 'Berlin',
        'comments': [],
    },
    {
        'profile_pic': './img/landschaft_round.jpg',
        'author': 'Landschafts-Fotografie',
        'image': './img/landschaft.jpg',
        'description': 'Bei Aufnahmen vom Meer muss man besonders auf die Lichtreflektion achten',
        'location': 'Wien',
        'comments': [],
    }
]; 

// let comments0 = [];
// let comments1 = [];


// Zeile 45 weiter machen mit der div
/** 
 * render all single posts with for-loop
 */
function show() {
    document.getElementById('posts-container').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('posts-container').innerHTML += `
        <div class="singlepost-container">

            <div class="author-container">
                <img class="round-img" src="${post['profile_pic']}">
                    <div class="author-subcontainer"> 
                        <span class="author-style"> ${post['author']} </span>
                        <span> ${post['location']} </span> 
                    </div>
            </div> 

            <img class="posted-img" src="${post['image']}">

            <div class="description-style">
                <div class="authorpost-container">
                    <b>${post['author']}</b>
                    ${post['description']} 
                </div>
                <div class="posted-comments-container" id="postedComment${[i]}"></div>
                <div class="comment-container">
                    <img src="./img/smile.png">
                    <textarea class="comment-style" placeholder="Kommentieren ..." name="commentInput" id="comment${[i]}"></textarea>
                    <button class="comment-button" onclick="postComment(${[i]})"> Posten </button>
                </div>
            </div>
            
        </div>
        `;
    }
}


/**
 * Push and display comment
 */
function postComment(postedIndex){
    let comment = document.getElementById(`comment${postedIndex}`);
    posts[postedIndex].comments.push(comment.value);
    // comments0.push(comment.value);
    comment.value = '';
    document.getElementById(`postedComment${postedIndex}`).innerHTML = '';
    // for (let index = 0; index < comments0.length; index++) {
    for (let index = 0; index < posts[postedIndex].comments.length; index++) {
        document.getElementById(`postedComment${postedIndex}`).innerHTML += `
        <br>
        <p class="posted-comment">${posts[postedIndex].comments[index]}</p>
        `;
    }
}

/**
 * Open side-menu (available to max width 450px screensize)
 */
function showMenu() {
    document.getElementById('hidden-menu').classList.add('show-overlay-menu');
}

function closeMenu() {
    document.getElementById('hidden-menu').classList.remove('show-overlay-menu');
}