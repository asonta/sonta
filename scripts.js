messageToSonta = "And this -- a simple example of what you can do with javascript"

window.onload = function(){
    setTimeout(function(){
        document.getElementById('show-off-javascript').innerText = messageToSonta;
    }, 2500)
    setTimeout(function(){
        document.getElementById('next-steps').style.display = "block"
    }, 5000)
}