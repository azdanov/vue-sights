import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { UPDATE_SIGHT, UPDATE_WEATHER, LOADING, LOADED } from "./types";
import { sights } from "@/store/sights";

Vue.use(Vuex);

const state = {
  sights,
  sight: {
    icon: "",
    name: "",
    description: "",
    location: ""
  },
  weather: {
    description: "",
    image: "",
    temperature: 0,
    humidity: 0,
    sunrise: "",
    sunset: "",
    time: "",
    timezone: ""
  },
  loading: false
};

const mutations = {
  [UPDATE_SIGHT](state, payload) {
    state.sight.icon = payload.icon;
    state.sight.name = payload.name;
    state.sight.description = payload.description;
    state.sight.location = payload.location;
  },
  [UPDATE_WEATHER](state, payload) {
    state.weather.description =
      payload.consolidated_weather[0].weather_state_name;
    state.weather.image =
      payload.consolidated_weather[0].weather_state_abbr + ".svg";
    state.weather.temperature = payload.consolidated_weather[0].the_temp.toFixed();
    state.weather.humidity = payload.consolidated_weather[0].humidity.toFixed();
    state.weather.sunset = payload.sun_set;
    state.weather.sunrise = payload.sun_rise;
    state.weather.time = payload.time;
    state.weather.timezone = payload.timezone;
  },
  [LOADING](state) {
    state.loading = true;
  },
  [LOADED](state) {
    state.loading = false;
  }
};

const actions = {
  fetchSight({ commit }, id) {
    commit(LOADING);
    axios.get(`${process.env.VUE_APP_WEATHER_URL}/${id}/`).then(response => {
      const weather = response.data;
      console.log(weather);
      const sight = sights.find(sight => sight.id === id);

      commit(UPDATE_SIGHT, sight);
      commit(UPDATE_WEATHER, weather);
      commit(LOADED);
    });
  }
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
