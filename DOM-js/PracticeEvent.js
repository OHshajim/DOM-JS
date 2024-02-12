// practice 

function Handler() {
    const hendlerText = document.getElementById('text');
    hendlerText.innerText = "I  was changed for your  click."
}

//option-2
document.getElementById('btn').addEventListener('click', function () {
    const btnHandler = document.getElementById('text');
    btnHandler.innerText = "I  am change for her  click."
})

// option-2 recap
document.getElementById('comment').addEventListener('click', function () {
    const commentText = document.getElementById('input');
    inputText = commentText.value;
    // to change the text
    const Display = document.getElementById('display');
    Display.innerText = inputText;
    // comment box  clear 
    commentText.value = '';
})

// comment box
// add Event Listener 
document.getElementById('post').addEventListener('click', function () {
    // input the text 
    const comment = document.getElementById('new-comment');
    const commentText = comment.value;
    // add comment box
    const commentbox = document.getElementById('add');
    // create comment 
    const p = document.createElement('p');
    p.innerText = commentText;
    // add comment on the box
    commentbox.appendChild(p);
    // to remove text on input box 
    comment.value = ' ';
})
//     <!-- git delete system -->

        // button settings
        document.getElementById('delete-confirm').addEventListener('keyup',function(){
            const inputText = event.target.value 
            const button = document.getElementById('delete')
            if(inputText === 'delete'){button.removeAttribute('disabled')}
            else{
                button.setAttribute('disabled',true)
            }
        })
        // text delete 
        document.getElementById('delete').addEventListener('click',function(){
            const text = document.getElementById('git-text')
            text.style.display = 'none'
        })
