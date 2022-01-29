
const scriptURL = 'https://script.google.com/macros/s/AKfycbws2HFwMZJLnZ99rReIUVy8IyRHpTeKuP2X9GSlwzmLqpgh8LxcdiP2rDPKY-F1hZ-R/exec'
            const form = document.forms['google-sheet']
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('thanks').classList.remove("after-submit"); document.getElementById('form').classList.add("after-submit")}, 1))
                .catch(error => console.error('Error!', error.message))
            });
