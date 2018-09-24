<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else class="sections">
      <div class="section">
        <h2>{{ sight.name }}</h2>
        <img :src="getIcon(`sights/${sight.icon}`)" :alt="sight.name" class="icon">
        <a
          :href="`https://www.google.com/maps/place/${encodeURI(sight.location)}`"
          class="link"
        >{{ sight.location }}</a>
        <p>{{ sight.description }}</p>
      </div>
      <div class="section">
        <h2>Weather</h2>
        <img :src="getIcon(`weather/${weather.image}`)" :alt="sight.name" class="weather">
        <p>
          <a :href="`https://www.metaweather.com/${id}/`" class="link">{{ weather.description }}</a>
        </p>
        <table class="table">
          <tbody>
            <tr>
              <td class="description">Temperature</td>
              <td class="data">{{ weather.temperature }} ºC</td>
            </tr>
            <tr>
              <td class="description">Humidity</td>
              <td class="data">{{ weather.humidity }}%</td>
            </tr>
            <tr>
              <td class="description">Current Time</td>
              <td class="data">{{ formatTime(weather.time) }}</td>
            </tr>
            <tr>
              <td class="description">Sunrise</td>
              <td class="data">{{ formatTime(weather.sunrise) }}</td>
            </tr>
            <tr>
              <td class="description">Sunset</td>
              <td class="data">{{ formatTime(weather.sunset) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/Loader";
import moment from "moment";

export default {
  components: {
    Loader: Loader
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(["loading", "sight", "weather"])
  },
  watch: {
    id() {
      this.fetchSight();
    }
  },
  created() {
    this.fetchSight();
  },
  methods: {
    fetchSight() {
      this.$store.dispatch("fetchSight", this.id);
    },
    getIcon(path) {
      return require(`@/assets/${path}`);
    },
    formatTime(datetime) {
      return moment.parseZone(datetime).format("LT");
    }
  }
};
</script>

<style lang="scss" scoped>
.sections {
  display: flex;
  justify-content: space-around;
}
.icon {
  width: 150px;
  height: 150px;
}
.weather {
  width: 100px;
  height: 100px;
  margin: 20px 0 30px;
}
.section {
  width: 50%;
}
.link {
  display: block;
  margin: 16px 0;
}
.table {
  margin: 16px auto;
  .description {
    text-align: left;
    width: 120px;
  }
  .data {
    text-align: right;
  }
}
</style>
