document.getElementById("buyButton").onclick = function() {
    document.getElementById("buyModal").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("buyModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("buyModal")) {
        document.getElementById("buyModal").style.display = "none";
    }
}

document.getElementById('submitButton').addEventListener('click', async () => {
    const responseContainer = document.getElementById('responseContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');

    document.getElementById('submitButton').style.display = 'none';
    loadingSpinner.classList.remove('hidden');

    try {
        const response = await fetch('/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        if (data && data.analysis) {
            responseContainer.innerHTML = `<p>${data.analysis}</p>`;
        } else {
            responseContainer.innerHTML = '<p>No response received.</p>';
        }
        
    } catch (error) {
        console.error('Error:', error);
        responseContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    } finally {
        loadingSpinner.classList.add('hidden');
        document.getElementById('submitButton').style.display = 'none';
    }
});
