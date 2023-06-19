import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productsInCard: []
}

export const productsSlice = createSlice({
    name: "productsValue",
    initialState,
    reducers: {
        initProducts : (state, actions) => {
            state.products = [...actions.payload];
        },
        addProductToCard : (state, actions) => {
            const isExistProdInCard = (state.productsInCard.filter(el => {

                if (el.product.id === actions.payload){
                    return true;
                }

                return false;
            })).length;
            console.log(isExistProdInCard);

            if (isExistProdInCard === 0)
            {
                const productToCard = {
                    amount : 1,
                    product: (state.products.filter(el => {
                        if(el.id === actions.payload){
                            return true;
                        }
                        return false;
                    }))[0]
                }
                state.productsInCard.push(productToCard);
            }
            else{
                state.productsInCard.map(el => {
                    if (el.product.id === actions.payload)
                    {
                        el.amount++;
                    }
                })
            }
        },
        removeProductFromCard : (state, actions) => {
            const amountOfProduct = (state.productsInCard.filter(el => {

                if (el.product.id === actions.payload){
                    return true;
                }

                return false;
            }))[0].amount;
            
            if (amountOfProduct === 1)
            {
                state.productsInCard = [...state.productsInCard.filter(el => {
                    if(el.product.id === actions.payload){
                        return false;
                    }
                    return true;
                })]
            }
            else{
                state.productsInCard.map(el => {
                    if (el.product.id === actions.payload)
                    {
                        el.amount--;
                    }
                })
            }
        }
    }
});

export const {initProducts, addProductToCard, removeProductFromCard} = productsSlice.actions;

export default productsSlice.reducer;