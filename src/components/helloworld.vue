<template>
  <h1>{{props.User.nom}}</h1>   <h1>{{props.User.prenom}}</h1>
</template>

<script setup>
const props = defineProps(["User"])
</script>