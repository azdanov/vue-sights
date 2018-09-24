<template>
  <li class="sight">
    <img :src="getIcon(sight.icon)" :alt="sight.name" class="icon">
    <div>
      <p class="name">{{ sight.name }}</p>
      <p class="location">{{ sight.location }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "SightListItem",
  props: {
    sight: {
      type: Object,
      default: function() {
        return {
          id: "",
          name: "Not Specified",
          location: "Not Specified",
          icon: ""
        };
      }
    }
  },
  methods: {
    getIcon(name) {
      return require(`@/assets/sights/${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.sight {
  display: inline-block;
  margin: 10px;
  padding: 20px 10px 0;
  width: 260px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
  }
}
.icon {
  width: 150px;
  height: 150px;
}
.name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0;
  color: #42b983;
}
.location {
  font-size: 1.1rem;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.6);
}
</style>
