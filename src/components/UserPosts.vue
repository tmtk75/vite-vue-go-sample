<template>
  <div>UserPosts</div>
  <div>{{ name }}'s posts</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    return {
      name: computed(() => route.params.name),
    };
  },
});
</script>
