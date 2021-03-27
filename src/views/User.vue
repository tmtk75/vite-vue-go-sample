<template>
  <h1>The user is {{ name }}</h1>
  <div>
    <router-link :to="{ path: `/user/${name}/profile` }">Profile</router-link> |
    <router-link :to="{ path: `/user/${name}/posts` }">Posts</router-link> |
    <router-link :to="`/user/${name}`">home</router-link>

    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    name: {},
  },
  setup() {
    const route = useRoute();
    const name = computed(() => route.params.name);
    return {
      name,
    };
  },
});
</script>
