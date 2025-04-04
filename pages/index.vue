<script setup lang="ts">
const session = useSupabaseSession();

if (!session.value) {
  console.log("No session!");
  navigateTo("/login");
}
</script>

<template>
  <h1>Index</h1>
</template>
