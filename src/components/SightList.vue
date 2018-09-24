<template>
  <div>
    <ul>
      <router-link
        v-for="sight in sights"
        :key="sight.name"
        :to="{ 
          name: 'sight', 
          params: { 
            slug: toKebabCase(sight.name), 
            title: sight.name,
            id: sight.id
          }
        }"
      >
        <sight-list-item :sight="sight"/>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { toKebabCase } from "@/utils";
import SightListItem from "@/components/SightListItem.vue";

export default {
  name: "SightList",
  components: {
    SightListItem
  },
  computed: mapState({ sights: "sights" }),
  methods: {
    toKebabCase
  }
};
</script>

<style lang="scss" scoped>
</style>
