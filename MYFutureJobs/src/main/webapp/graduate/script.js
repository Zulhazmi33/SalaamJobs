// start: sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(){
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function(e){
    if(!e.target.matches('.chat-sidebar-profile, chat-sidebar-profile *')){
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
})
// end: sidebar


// start: conversation

document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e){
        e.preventDefault
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelector('.conversation-item-dropdown').forEach(function(i){
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
})

document.addEventListener('click', function(e){
    if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')){
        document.querySelector('.conversation-item-dropdown').forEach(function(i){
            i.classList.remove('active')
        })
    }
})
// end: conversation