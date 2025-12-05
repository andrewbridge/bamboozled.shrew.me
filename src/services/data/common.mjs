
import { persistRef, ref } from "../../deps/vue.mjs";
import { signalDataReady } from "./lifecycle.mjs";

/** 
 * @template T
 * @typedef {import("../../app").Vue.Ref<T>} Ref<T>
 */

/** @type {Ref<string>} */
export const myThing = ref(null);
const myThingPersistKey = 'BAMBOOZLED_GAME_APP';
persistRef(myThing, myThingPersistKey, true);

signalDataReady();
