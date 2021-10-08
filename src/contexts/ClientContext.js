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
    favorite: null,
    pizzasCountInCart: JSON.parse(localStorage.getItem('cart'))
        ?
        JSON.parse(localStorage.getItem('cart')).pizzas.length
        : 0,
    combosCountInCart: JSON.parse(localStorage.getItem('combo'))
        ?
        JSON.parse(localStorage.getItem('combo')).combos.length
        : 0,
    pizzasCountInFavorite: JSON.parse(localStorage.getItem('favorite'))
        ?
        JSON.parse(localStorage.getItem('favorite')).pizzas.length
        : 0,
    cart: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            return { ...state, pizzas: action.payload }
        case 'ADD_AND_DELETE_PIZZA_CART':
            return { ...state, pizzasCountInCart: action.payload }
        case 'ADD_AND_DELETE_COMBO_CART':
            return { ...state, combosCountInCart: action.payload }
        case 'ADD_AND_DELETE_PIZZA_FAVORITE':
            return { ...state, pizzasCountInFavorite: action.payload }
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
        case "GET_FAVORITES":
            return { ...state, favorite: action.payload }
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
    const addAndDeletePizzaInCart = (pizza, price) => {
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
            subPrice: 0,
            alteredSubPrice: price
        }
        newPizza.subPrice = calcSubPrice(newPizza)
        newPizza.alteredSubPrice = calcSubPrice(newPizza)
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
    const addAndDeleteComboInCart = (combo) => {
        let cartCombo = JSON.parse(localStorage.getItem('cartCombo'))
        if (!cartCombo) {
            cartCombo = {
                combos: [],
                totalPrice: 0
            }
        }
        let newCombo = {
            combo: combo,
            count: 1,
            subPrice: 0,
        }
        newCombo.subPrice = calcSubPrice(newCombo)
        let newCart = cartCombo.combos.filter(
            item => item.combo.id === combo.id)
        if (newCart.length) {
            cartCombo.combos = cartCombo.combos.filter(
                item => item.combo.id !== combo.id)
        } else {
            cartCombo.combos.push(newCombo)
        }
        cartCombo.totalPrice = calcTotalPrice(cartCombo.combos)
        localStorage.setItem('cartCombo', JSON.stringify(combo))
        dispatch({
            type: 'ADD_AND_DELETE_COMBO_CART',
            payload: cartCombo.combos.length
        })
    }

    const addAndDeletePizzaInFavorite = (pizza) => {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        if (!favorite) {
            favorite = {
                pizzas: [],
            }
        }
        let newPizza = {
            pizza: pizza,
        }
        let newFavorite = favorite.pizzas.filter(item => item.pizza.id === pizza.id)
        if (newFavorite.length) {
            favorite.pizzas = favorite.pizzas.filter(item => item.pizza.id !== pizza.id)
        } else {
            favorite.pizzas.push(newPizza)
        }
        localStorage.setItem('favorite', JSON.stringify(favorite))
        dispatch({
            type: 'ADD_AND_DELETE_PIZZA_FAVORITE',
            payload: favorite.pizzas.length
        })
        console.log(favorite);
    }

    const checkPizzaInFavorite = (id) => {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        if (!favorite) {
            return false
        }
        let newFavorite = favorite.pizzas.filter(item => item.pizza.id === id)
        return newFavorite.length ? true : false
    }

    const checkPizzaInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            return false
        }
        let newCart = cart.pizzas.filter(item => item.pizza.id === id)
        return newCart.length ? true : false
    }
    const checkCombonCart = (id) => {
        let cartCombo = JSON.parse(localStorage.getItem('cartCombo'))
        if (!cartCombo) {
            return false
        }
        let newCombo = cartCombo.combos.filter(item => item.combo.id === id)
        return newCombo.length ? true : false
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: 'GET_CART',
            payload: cart
        })
    }
    const getFavorites = () => {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        dispatch({
            type: 'GET_FAVORITES',
            payload: favorite
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
                item.alteredSubPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.pizzas)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }
    const changeCountCombos = (count, id) => {
        let cartCombo = JSON.parse(localStorage.getItem('cart'))
        if (!cartCombo) {
            return
        }
        cartCombo.pizzas = cartCombo.pizzas.map(item => {
            if (item.pizza.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cartCombo.totalPrice = calcTotalPrice(cartCombo.pizzas)
        localStorage.setItem('cartCombo', JSON.stringify(cartCombo))
        getCart()
    }

    // pagination start 
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(1)

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
            addAndDeleteComboInCart,
            checkPizzaInCart,
            getCart,
            changeCountPizzas,
            getFavorites,
            checkPizzaInFavorite,
            addAndDeletePizzaInFavorite,


            pizzas: state.pizzas,
            combos: state.combos,
            beverages: state.beverages,
            desserts: state.desserts,
            snacks: state.snacks,
            othergood: state.othergood,
            pizzasCountInCart: state.pizzasCountInCart,
            combosCountInCart: state.combosCountInCart,
            cart: state.cart,
            currentPosts,
            favorite: state.favorite,
        }}>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;

