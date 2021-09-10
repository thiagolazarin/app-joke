const jokeElement = document.getElementById('joke');
const buttonJoke = document.getElementById('btnJoke');

buttonJoke.addEventListener('click', generationJoke);

async function generationJoke(){

    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});

    const joke = await jokeRes.json();
	jokeElement.innerHTML = joke.joke;

}

