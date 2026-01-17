const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

list.textContent = input.value;



button.addEventListener("click", function () {
    if (input.value.trim() == '') {
        input.focus();
    } else {
       //First I had to create the elements inside the if and provide values
        const newChapTittle = document.createElement('li');
        newChapTittle.textContent = input.value;
        list.appendChild(newChapTittle);

        const deleteChapterButton = document.createElement('button');
        newChapTittle.appendChild(deleteChapterButton);
        deleteChapterButton.textContent = 'X';
        deleteChapterButton.ariaLabel = 'Delete chapter';
        deleteChapterButton.id = 'close-button';
        deleteChapterButton.addEventListener("click", function () {
            list.removeChild(newChapTittle);
            input.focus();
        });


        input.value = '';
        input.focus();
    }
});

