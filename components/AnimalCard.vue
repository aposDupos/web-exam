<template>
  <v-card class="mx-auto"
          max-width="344">
    <v-card-text>
      <div>Тип: {{ animal.type }}</div>
      <p class="text-h4 text--primary">
        {{ animal.name }}
      </p>
      <p>Вес: {{ animal.weight }}</p>
      <p>Пол: {{ animal.sex }}</p>
      <div class="text--primary">
        Цвет: {{ animal.color }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AnimalCard",
  props: [
    'animal'
  ]
}
</script>

<style scoped>

</style>
