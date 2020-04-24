
class SwapiService {
	
	_apiBase = 'https://swapi.dev/api';
	
	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error('ошибка т.к. 404 или т.п.')
		}
		return await res.json();
	}
	
	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	}
	getPerson(id) {
		return this.getResource(`/people/${id}/`);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	}
	getPlanets(id) {
		return this.getResource(`/planets/${id}/`);
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}
	getStarship(id) {
		return this.getResource(`/starships/${id}/`);
	}

	
}

const swapi = new SwapiService();
swapi.getPerson(3).then((person) => {
	console.log(person.name)
});

