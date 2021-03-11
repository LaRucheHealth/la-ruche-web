 const scriptURL = 'https://script.google.com/macros/s/AKfycbyyOxfKle-g-TADbK6Sn24Ka07H0D8dcWUOGjGa2FAkeY6iMiq1kfj8YU4QZefuW30U3Q/exec'
            const form = document.forms['google-sheet']
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('thanks').classList.remove("after-submit"); document.getElementById('myForm').classList.add("after-submit")}, 1))
                .catch(error => console.error('Error!', error.message))
            });
