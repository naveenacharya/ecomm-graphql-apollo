const productList = [{
    id: 1,
    name: 'iPhone7',
    description: 'Apple Iphone 7 2017',
    category: 'Mobiles',
    price: 340,
    seller: 'iseller'
},
{
    id: 2,
    name: 'Pixel',
    description: 'Google Pixel 2018',
    category: 'Mobiles',
    price: 440,
    seller: 'gseller'
},
{
    id: 3,
    name: 'Samsung',
    description: 'Samsuung OLED 55',
    category: 'TV',
    price: 223000,
    seller: 'samsung'
}]

const reviewsList = [
    {
        id: 11,
        productId:1,
        title: 'Five Stars',
        comment: 'Can\'t get better than this',
        rating: 5,
        username: 'Sudipta Kar',
    },
    {
        id: 12,
        productId:1,
        title: 'Charging cable is flimsy',
        comment: 'Damaged after 6 months of use. Warranty refused',
        rating: 2,
        username: 'Bhavesh',
    },
    {
        id: 21,
        productId:2,
        title: 'Superb Phone',
        comment: 'Superb speed and awesome quality',
        rating: 5,
        username: 'Tanvi',
    },
    {
        id: 23,
        productId:3,
        title: 'The best!',
        comment: 'Awesome picture quality',
        rating: 5,
        username: 'Sandeep',
    }
]

const resolvers = {

    Query: {
        products: (_, { category, name }) => {
            return productList;
        },

        product: (_, args) => {
            return productList.find(product => product.id === args.id);
        }
    },

    Product: {
        reviews: (product) => {
            let reviews = [];
            for(var i=0; i<reviewsList.length; i++){
                if(reviewsList[i].productId === product.id){
                    reviews.push(reviewsList[i]);
                }
            }
            return reviews;
        }

    },


};

export default resolvers;