"use strict"


async function submit() {
    const formData = new FormData(document.querySelector('form'));
    const response = await fetch('/lamp/api/api-get-users.php', {
        method = 'POST',
        body: formData
    })
    console.log(response)

}