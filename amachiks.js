let burgerHolder = document.querySelector('#hamburger_div');
// if(burgerHolder){
    burgerHolder.addEventListener('click', function(){
        Dropdown_sec.style.display = 'flex';
    })
// }

// CODE FOR CLOSING THE SIDEBAR
let exitting = document.querySelector('#exit_button');
exit_button.addEventListener('click',function(){
    Dropdown_sec.style.display = 'none';
})