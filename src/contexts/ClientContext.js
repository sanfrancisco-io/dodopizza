import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calc';
import { COMBO_API, BEVERAGES_API, DESSERTS_API, OTHERGOODS_API, PIZZA_API, SNACKS_API } from '../helpers/const';


export const clientContext = React.createContext()

const INIT_STATE = {
    pizzas: null,
    combos: null,
    snacks: null,
    desserts: null,
    beverages: null,
    othergood: null,
    pizzasCountInCart: JSON.parse(localStorage.getItem('cart'))
        ?
        JSON.parse(localStorage.getItem('cart')).pizzas.length
        : 0,
    cart: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            return { ...state, pizzas: action.payload }
        case 'ADD_AND_DELETE_PIZZA_CART':
            return { ...state, pizzasCountInCart: action.payload }
        case 'GET_CART':
            return { ...state, cart: action.payload }
        case 'GET_COMBOS':
            return { ...state, combos: action.payload }
        case 'GET_SNACKS':
            return { ...state, snacks: action.payload }
        case 'GET_DESSERTS':
            return { ...state, desserts: action.payload }
        case 'GET_BEVERAGES':
            return { ...state, beverages: action.payload }
        case 'GET_OTHERGOOD':
            return { ...state, othergood: action.payload }
        default:
            return { ...state }
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getPizzas = async () => {
        const { data } = await axios(`${PIZZA_API}${window.location.search}`)
        dispatch({
            type: 'GET_PIZZAS',
            payload: data
        })
    }
    const getCombos = async () => {
        const { data } = await axios(`${COMBO_API}${window.location.search}`)
        dispatch({
            type: 'GET_COMBOS',
            payload: data
        })
    }

    const getSnacks = async () => {
        const { data } = await axios(`${SNACKS_API}${window.location.search}`)
        dispatch({
            type: 'GET_SNACKS',
            payload: data
        })
    }
    const getDesserts = async () => {
        const { data } = await axios(`${DESSERTS_API}${window.location.search}`)
        dispatch({
            type: 'GET_DESSERTS',
            payload: data
        })
    }
    const getBeverages = async () => {
        const { data } = await axios(`${BEVERAGES_API}${window.location.search}`)
        dispatch({
            type: 'GET_BEVERAGES',
            payload: data
        })
    }
    const getOthergood = async () => {
        const { data } = await axios(`${OTHERGOODS_API}${window.location.search}`)
        dispatch({
            type: 'GET_OTHERGOOD',
            payload: data
        })
    }
    const addAndDeletePizzaInCart = (pizza) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                pizzas: [],
                totalPrice: 0
            }
        }
        let newPizza = {
            pizza: pizza,
            count: 1,
            subPrice: 0
        }
        newPizza.subPrice = calcSubPrice(newPizza)
        let newCart = cart.pizzas.filter(
            item => item.pizza.id === pizza.id)
        if (newCart.length) {
            cart.pizzas = cart.pizzas.filter(
                item => item.pizza.id !== pizza.id)
        } else {
            cart.pizzas.push(newPizza)
        }
        cart.totalPrice = calcTotalPrice(cart.pizzas)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: 'ADD_AND_DELETE_PIZZA_CART',
            payload: cart.pizzas.length
        })
    }
    const checkPizzaInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            return false
        }
        let newCart = cart.pizzas.filter(item => item.pizza.id === id)
        return newCart.length ? true : false
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: 'GET_CART',
            payload: cart
        })
    }

    const changeCountPizzas = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            return
        }
        cart.pizzas = cart.pizzas.map(item => {
            if (item.pizza.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.pizzas)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    // pagination start 
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)

    useEffect(() => {
        const fetchItems = () => {
            const data = state.pizzas || state.combos || state.desserts || state.beverages || state.othergood || state.snacks || []
            setPosts(data)
        }
        fetchItems()
    }, [state.pizzas, state.combos, state.desserts, state.othergood, state.snacks, state.beverages])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirst = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirst, indexOfLastPost)
    const totalPosts = posts.length

    const changePage = (newPage) => {
        setCurrentPage(newPage)
    }
    // pagination end
    return (
        <clientContext.Provider value={{
            getPizzas,
            getCombos,
            getBeverages,
            getDesserts,
            getOthergood,
            getSnacks,
            addAndDeletePizzaInCart,
            checkPizzaInCart,
            getCart,
            changeCountPizzas,


            pizzas: state.pizzas,
            combos: state.combos,
            beverages: state.beverages,
            desserts: state.desserts,
            snacks: state.snacks,
            othergood: state.othergood,
            pizzasCountInCart: state.pizzasCountInCart,
            cart: state.cart,
            currentPosts,
        }}>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;