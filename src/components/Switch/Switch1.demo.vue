<demo>
  常规用法
</demo>

<template>
  <cloud-switch v-model:value="bool" />
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const bool = ref(false)
      return {
        bool
      }
    }
  }
</script>