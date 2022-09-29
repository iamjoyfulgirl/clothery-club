async function outerwear() {
    const response = await fetch('api/category/outwear', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // If successful, redirect the browser to the home page
        console.log(response);
      } else {
        alert('Failed');
      }
    }
 

document.querySelector('#outerwear').addEventListener('click', outerwear);