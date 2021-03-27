<template>
  <h1>The user is {{ name }}</h1>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const name = computed(() => route.params.name);
    return {
      name,
    };
  },
});
</script>
