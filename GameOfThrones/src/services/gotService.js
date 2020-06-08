export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	
	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok) {
			throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	}
	
	getAllCharacters = async () => {
		const characters = await this.getResource('/characters?page=5&pageSize=10');
		return characters.map((char) => {
				char.id = char.url.split('characters/')[1];
				return this._transformCharacter(char)
			}
		)
	}
	
	getCharacter = async (id) => {
		const character = await this.getResource(`/characters/${id}`);
		character.id = id;
		return this._transformCharacter(character);
	}

	getAllBooks = async () => {
		const books = await this.getResource('/books/');
		return books.map((book) => {
			book.id = book.url.split('books/')[1];
			return this._transformBook(book);
		})
	}

	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}`);
		book.id = id;
		return this._transformBook(book);
	}

	getAllHouses = async () => {
		const houses = await this.getResource('/houses/');
		return houses.map(house => {
			house.id = house.url.split('houses/')[1];
			return this._transformHouse(house);
		})
	}

	getHouse = async (id) => {
		const house = this.getResource(`/houses/${id}/`);
		house.id = id;
		return this._transformHouse(house);
	}
	
	checkObj = (obj) => {
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