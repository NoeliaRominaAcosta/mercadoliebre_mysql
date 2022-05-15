const fs = require('fs');
const path = require('path');

/* Joining the path of the file productsDataBase.json with the path of the file where it is being used. */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

/* Reading the file productsDataBase.json and converting it to a JavaScript object. */
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/**
 * It takes a number and returns a string with a dot (.) as a thousand separator
 */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let productsVisited = products.filter(product => product.category === "visited");
		let productsInSale = products.filter(product => product.category === "in-sale");
		return res.render('index', {
			//devuelve las categorias filtradas y la funcion 
			productsVisited,
			productsInSale,
			toThousand
		})
	},
	search: (req, res) => {
		//return res.send(req.query) para ver lo que llega en el navegador
		const {keywords} = req.query;
		//keywords viene del name del input en el header para buscar
		let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords.toLowerCase()));
		//que coincida nombre o descripcion
		return res.render('results', {
			result,
			keywords,
			toThousand
		})
	},
};

module.exports = controller;
