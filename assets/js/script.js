 const scriptURL = 'https://script.google.com/macros/s/AKfycbwuW-Yuu3qIEhnvYOfffH5Fa31ATOntwSbEhjCbIAm_KP6symTMCnqGg6RZkbcM0xnx6A/exec'
            const form = document.forms['google-sheet']
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('thanks').classList.remove("after-submit"); document.getElementById('myForm').classList.add("after-submit");document.getElementById('contact-us').classList.add("after-submit")}, 1))
                .catch(error => console.error('Error!', error.message))
            });

