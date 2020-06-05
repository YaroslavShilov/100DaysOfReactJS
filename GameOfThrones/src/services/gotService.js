export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	
	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok) {
			throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	}
	
	async getAllCharacters() {
		const characters = await this.getResource('/characters?page=5&pageSize=10');
		return characters.map((char) => {
				char.id = char.url.split('characters/')[1];
				return this._transformCharacter(char)
			}
		)
	}
	
	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}`);
		character.id = id;
		return this._transformCharacter(character);
	}

	getAllBooks() {
		return this.getResource('/books/');
	}

	getBook(id) {
		return this.getResource(`/books/${id}/`);
	}

	getAllHouses() {
		return this.getResource('/houses/');
	}

	getHouse(id) {
		return this.getResource(`/houses/${id}/`);
	}
	
	checkObj(obj) {
		for (let key in obj) {
			if(obj[key] === '') {
				obj[key] = 'unknown :('
			}
		}
		return obj;
	}
	
	_transformCharacter = (char) => {
		return this.checkObj({
			id: char.id,
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture,
		})
	}
	
	_transformHouse = (house) => {
		return this.checkObj({
			id: house.id,
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons,
		});
	}
	
	_transformBook = (book) => {
		return this.checkObj({
			id: book.id,
			name: book.name,
			numberOfPages: book.numberOfPages,
			publisher: book.publisher,
			released: book.released
		});
	}
	
}