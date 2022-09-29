async function man() {
    const response = await fetch('api/category/man', {
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
 

document.querySelector('#man').addEventListener('click', man);