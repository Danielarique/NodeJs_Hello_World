const { restart } = require("nodemon");

const products = [{
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 4,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 5,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 6,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    },
    {
        "id": 7,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 8,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 9,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 10,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    },
    {
        "id": 11,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 12,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 13,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 14,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    },
    {
        "id": 15,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 16,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 17,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 18,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    }
];

const getProducts = (req, res) => {
    const itemsPerPage = 3;
    const page = parseInt(req.query.page);
    const total = products.length;
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    res.send({
        "page": page,
        "per_page": itemsPerPage,
        "total": products.length,
        "total_pages": Math.ceil(total / itemsPerPage),
        "data": products.slice(start, end),
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    })
}

const getProductsById = (req, res) => {
    console.log(req.params);
    const productId = req.params.productId;
    const index = products.findIndex((item) => item.id == productId);
    console.log(index, productId, req.params)
    if (index !== -1) {
        res.send({ data: products[index] });
    } else {
        res.status(404).send({});
    }
    //res.send(users[0]);
}

const createProduct = (req, res) => {
    console.log(req.body);
    const { name, year, color, pantone_value } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        year,
        color,
        pantone_value
    };

    products.push(newProduct);
    res.send(newProduct);
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.productId);
    const { name, year, color, pantone_value } = req.body;
    const index = products.findIndex((item) => item.id == id);
    if (index != -1) {
        products[index] = {
            id,
            name,
            year,
            color,
            pantone_value
        }
        res.send({ data: products[index] });
    } else {
        res.status(404).send();
    }
}

const partialUpdateProduct = (req, res) => {
    const productId = parseInt(req.params.productId);

    const { id, name, year, color, pantone_value } = req.body;
    const index = products.findIndex((item) => item.id == productId);
    console.log(index);
    if (index != -1) {
        const product = products[index];
        products[index] = {
            id: id || product.productId,
            name: name || product.name,
            year: year || product.year,
            color: color || product.color,
            pantone_value: pantone_value || product.pantone_value
        }
        res.send({ data: products[index] });
    } else {
        res.status(404).send();
    }
}

const deleteProductById = (req, res) => {
    const productId = parseInt(req.params.productId);
    const index = products.findIndex((item) => item.id == productId);

    if (index != -1) {
        products.splice(index, 1);
        res.send({});
    } else {
        res.status(404).send({});
    }
}

module.exports = {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    partialUpdateProduct,
    deleteProductById
}