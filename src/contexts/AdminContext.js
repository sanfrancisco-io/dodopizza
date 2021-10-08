import axios from 'axios';
import React, { useReducer } from 'react';
import { COMMNETS, COMBO_API, BEVERAGES_API, DESSERTS_API, OTHERGOODS_API, PIZZA_API, SNACKS_API } from '../helpers/const';



export const adminContext = React.createContext()

const INIT_STATE = {
    pizza: null,
    combo: null,
    snack: null,
    dessert: null,
    beverage: null,
    othergood: null,
    comment: null,
    pizzaToEdit: null,
    comboToEdit: null,
    snackToEdit: null,
    dessertToEdit: null,
    beverageToEdit: null,
    othergoodToEdit: null,
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PIZZA':
            return { ...state, pizza: action.payload }
        case 'GET_PIZZA_TO_EDIT':
            return { ...state, pizzaToEdit: action.payload }
        case 'GET_COMBO':
            return { ...state, combo: action.payload }
        case 'GET_COMMENTS':
            return { ...state, comment: action.payload }
        case 'GET_COMBO_TO_EDIT':
            return { ...state, comboToEdit: action.payload }
        case 'GET_SNACKS':
            return { ...state, snack: action.payload }
        case 'GET_SNACKS_TO_EDIT':
            return { ...state, snackToEdit: action.payload }
        case 'GET_DESSERTS':
            return { ...state, dessert: action.payload }
        case 'GET_DESSERTS_TO_EDIT':
            return { ...state, dessertToEdit: action.payload }
        case 'GET_BEVERAGES':
            return { ...state, beverage: action.payload }
        case 'GET_BEVERAGES_TO_EDIT':
            return { ...state, beverageToEdit: action.payload }
        case 'GET_OTHERGOODS':
            return { ...state, othergood: action.payload }
        case 'GET_OTHERGOODS_TO_EDIT':
            return { ...state, othergoodToEdit: action.payload }
        default:
            return { ...state }
    }
}
const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    const createPizza = async (newItem) => {
        await axios.post(PIZZA_API, { ...newItem, price: +newItem.price })
        getPizza()
    }

    const createComment = async (newItem) => {
        await axios.post(COMMNETS, newItem)
        getComm()
    }

    const createCombo = async (newItem) => {
        await axios.post(COMBO_API, { ...newItem, price: +newItem.price })
        getCombo()
    }

    const createSnacks = async (newItem) => {
        await axios.post(SNACKS_API, { ...newItem, price: +newItem.price })
        getSnacks()
    }

    const createDesserts = async (newItem) => {
        await axios.post(DESSERTS_API, { ...newItem, price: +newItem.price })
        getDesserts()
    }
    const createBeverages = async (newItem) => {
        await axios.post(BEVERAGES_API, { ...newItem, price: +newItem.price })
        getBeverages()
    }
    const createOtherGoods = async (newItem) => {
        await axios.post(OTHERGOODS_API, { ...newItem, price: +newItem.price })
        getOtherGoods()
    }


    const getComm = async () => {
        const { data } = await axios(COMMNETS)
        dispatch({
            type: 'GET_COMMENTS',
            payload: data
        })
    }
    const getPizza = async () => {
        const { data } = await axios(PIZZA_API)
        dispatch({
            type: 'GET_PIZZA',
            payload: data
        })
    }

    const getCombo = async () => {
        const { data } = await axios(COMBO_API)
        dispatch({
            type: 'GET_COMBO',
            payload: data
        })
    }
    const getSnacks = async () => {
        const { data } = await axios(SNACKS_API)
        dispatch({
            type: 'GET_SNACKS',
            payload: data
        })
    }
    const getDesserts = async () => {
        const { data } = await axios(DESSERTS_API)
        dispatch({
            type: 'GET_DESSERTS',
            payload: data
        })
    }
    const getBeverages = async () => {
        const { data } = await axios(BEVERAGES_API)
        dispatch({
            type: 'GET_BEVERAGES',
            payload: data
        })
    }
    const getOtherGoods = async () => {
        const { data } = await axios(OTHERGOODS_API)
        dispatch({
            type: 'GET_OTHERGOODS',
            payload: data
        })
    }


    const deletePizza = async (id) => {
        await axios.delete(`${PIZZA_API}/${id}`)
        getPizza()
    }
    const deleteCombo = async (id) => {
        await axios.delete(`${COMBO_API}/${id}`)
        getCombo()
    }
    const deleteSnacks = async (id) => {
        await axios.delete(`${SNACKS_API}/${id}`)
        getSnacks()
    }
    const deleteDesserts = async (id) => {
        await axios.delete(`${DESSERTS_API}/${id}`)
        getDesserts()
    }
    const deleteBeverages = async (id) => {
        await axios.delete(`${BEVERAGES_API}/${id}`)
        getBeverages()
    }
    const deleteOtherGoods = async (id) => {
        await axios.delete(`${OTHERGOODS_API}/${id}`)
        getOtherGoods()
    }


    const getPizzaToEdit = async (id) => {
        const { data } = await axios(`${PIZZA_API}/${id}`)
        dispatch({
            type: 'GET_PIZZA_TO_EDIT',
            payload: data
        })
    }
    const getComboToEdit = async (id) => {
        const { data } = await axios(`${COMBO_API}/${id}`)
        dispatch({
            type: 'GET_COMBO_TO_EDIT',
            payload: data
        })
    }
    const getSnacksToEdit = async (id) => {
        const { data } = await axios(`${SNACKS_API}/${id}`)
        dispatch({
            type: 'GET_SNACKS_TO_EDIT',
            payload: data
        })
    }
    const getDessertsToEdit = async (id) => {
        const { data } = await axios(`${DESSERTS_API}/${id}`)
        dispatch({
            type: 'GET_DESSERTS_TO_EDIT',
            payload: data
        })
    }
    const getBeveragesToEdit = async (id) => {
        const { data } = await axios(`${BEVERAGES_API}/${id}`)
        dispatch({
            type: 'GET_BEVERAGES_TO_EDIT',
            payload: data
        })
    }
    const getOtherGoodsToEdit = async (id) => {
        const { data } = await axios(`${OTHERGOODS_API}/${id}`)
        dispatch({
            type: 'GET_OTHERGOODS_TO_EDIT',
            payload: data
        })
    }

    const saveEditedPizza = async (editedPizza) => {
        await axios.patch(`${PIZZA_API}/${editedPizza.id}`, { ...editedPizza, price: +editedPizza.price })
        getPizza()
    }
    const saveEditedCombo = async (editedCombo) => {
        await axios.patch(`${COMBO_API}/${editedCombo.id}`, { ...editedCombo, price: +editedCombo.price })
        getCombo()
    }
    const saveEditedSnacks = async (editeSnacks) => {
        await axios.patch(`${SNACKS_API}/${editeSnacks.id}`, { ...editeSnacks, price: +editeSnacks.price })
        getSnacks()
    }
    const saveEditedDesserts = async (editedDesserts) => {
        await axios.patch(`${DESSERTS_API}/${editedDesserts.id}`, { ...editedDesserts, price: +editedDesserts.price })
        getDesserts()
    }
    const saveEditedBeverages = async (editedBeverages) => {
        await axios.patch(`${BEVERAGES_API}/${editedBeverages.id}`, { ...editedBeverages, price: +editedBeverages.price })
        getBeverages()
    }
    const saveEditedOtherGoods = async (editedOtherGoods) => {
        await axios.patch(`${OTHERGOODS_API}/${editedOtherGoods.id}`, { ...editedOtherGoods, price: +editedOtherGoods.price })
        getOtherGoods()
    }


    return (
        <adminContext.Provider value={{
            createPizza,
            createCombo,
            createSnacks,
            createDesserts,
            createBeverages,
            createOtherGoods,
            createComment,

            getComm,
            getPizza,
            getCombo,
            getSnacks,
            getDesserts,
            getBeverages,
            getOtherGoods,

            deletePizza,
            deleteCombo,
            deleteSnacks,
            deleteDesserts,
            deleteBeverages,
            deleteOtherGoods,

            getPizzaToEdit,
            getComboToEdit,
            getSnacksToEdit,
            getDessertsToEdit,
            getBeveragesToEdit,
            getOtherGoodsToEdit,

            saveEditedPizza,
            saveEditedCombo,
            saveEditedSnacks,
            saveEditedDesserts,
            saveEditedBeverages,
            saveEditedOtherGoods,

            comment: state.comment,
            pizza: state.pizza,
            combo: state.combo,
            snack: state.snack,
            dessert: state.dessert,
            beverage: state.beverage,
            othergood: state.othergood,

            pizzaToEdit: state.pizzaToEdit,
            comboToEdit: state.comboToEdit,
            snackToEdit: state.snackToEdit,
            dessertToEdit: state.dessertToEdit,
            beverageToEdit: state.beverageToEdit,
            othergoodToEdit: state.othergoodToEdit
        }}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;
