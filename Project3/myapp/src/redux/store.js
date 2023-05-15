import {configureStore} from "@reduxjs/toolkit"
import { first } from "./reducer"


const store = configureStore({
    reducer: {
        Cart: first ,
},

})

export default store