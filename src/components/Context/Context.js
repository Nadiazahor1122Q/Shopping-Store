// import e from "express"
import React, { Component } from "react"

export const DataContext = React.createContext()

export class DataProvider extends Component {

    state = {
        products: [
            {
                '_id': '1',
                'title': 'Nike Shoes 01',
                'src': '/images/category-1.jpg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 22,
                'colors': ['red', 'blue', 'crimson', 'teal'],
                'count': 1,

            },
            {
                '_id': '2',
                'title': 'Nike Shoes 02',
                'src': '/images/category-2.jpg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 23,
                'colors': ['dark', 'black', 'crimson', 'teal'],
                'count': 1,

            },
            {
                '_id': '3',
                'title': 'Nike Shoes 03',
                'src': '/images/product-11.jpg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 24,
                'colors': ['red', 'black', 'crimson', 'teal'],
                'count': 1,

            },
            {
                '_id': '4',
                'title': 'Nike Shoes 04',
                'src': 'https://5.imimg.com/data5/DD/LI/TM/SELLER-17552598/nike-structure-15-shoes-500x500.jpeg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 25,
                'colors': ['red', 'green', 'crimson', 'teal'],
                'count': 1,

            }, {
                '_id': '5',
                'title': 'Nike Shoes 05',
                'src': '/images/product-2.jpg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 26,
                'colors': ['red', 'black', 'crimson', 'teal'],
                'count': 1,

            },
            {
                '_id': '6',
                'title': 'Nike Shoes 06',
                'src': 'https://www.sastajoota.com/wp-content/uploads/2020/10/Nike-Run-Shoes-blue.jpeg',
                'description': 'Here are some custom show product shop.',
                'content': ' A contents page is a list, usually found before the start of any writing',
                'price': 27,
                'colors': ['red', 'black', 'crimson', 'teal'],
                'count': 1,

            },
            // {
            //     '_id': '7',
            //     'title': 'Nike Shoes 07',
            //     'src': '/images/product-10.jpg',
            //     'description': 'Here are some custom show product shop.',
            //     'content': ' A contents page is a list, usually found before the start of any writing',
            //     'price': 28,
            //     'colors': ['red', 'black', 'crimson', 'teal'],
            //     'count': 1,

            // },
            // {
            //     '_id': '8',
            //     'title': 'Nike Shoes 08',
            //     'src': 'https://i.pinimg.com/originals/3f/7c/10/3f7c105569f6a7c4d6dc17f1a5c9758b.png',
            //     'description': 'Here are some custom show product shop.',
            //     'content': ' A contents page is a list, usually found before the start of any writing',
            //     'price': 28,
            //     'colors': ['red', 'black', 'crimson', 'teal'],
            //     'count': 1,

            // },
            // {
            //     '_id': '9',
            //     'title': 'Nike Shoes 09',
            //     'src': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMzC7u5u6mDLrHMBlPX-ARMpjFwjQDvDxUzpQ1u_ji6TdWQdFYrgs_urm9yTxoqGiOCk&usqp=CAU',
            //     'description': 'Here are some custom show product shop.',
            //     'content': ' A contents page is a list, usually found before the start of any writing',
            //     'price': 28,
            //     'colors': ['red', 'black', 'crimson', 'teal'],
            //     'count': 1,

            // },

        ],
        cart: [],
        total:0              
    }
    addCart = (title) => {

        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.title !== title
        });
        if (check) {

            const data = products.filter(product => {
                return product.title === title
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert('The Product has beeen added to cart.');
        }

    };
    reduction = id => {
        const { cart } = this.state;
        cart.forEach((item) => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };
    increase = id => {
        const { cart } = this.state;
        cart.forEach((item) => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };
    removeProduct = id => {
        if (window.confirm('Do you want to delete this Product?')) {

            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }
    };
    getTotal =() =>{
        const {cart} =this.state;
        const res =cart.reduce((prev,item)=>{
            return prev +(item.price * item.count);

        },0)
        this.setState({total :res})
    }

   componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }

    render() {
        const { products, cart,total } = this.state;
        const { addCart, reduction, increase, removeProduct,getTotal } = this
        return (

            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct,total,getTotal }}>
                {this.props.children}
            </DataContext.Provider>

        )
    }
}