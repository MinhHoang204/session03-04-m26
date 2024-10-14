import { createStore } from "vuex";
import countModule from "./modules/count";

const store = createStore({
    modules: {
       countModule,
       todoListModule,
    },
});

export default store;