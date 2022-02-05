<template>
  <v-row justify="center" class="mt-10">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Добавить животное
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить новую зверушку</span>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-container>
              <v-row justify="center">
                <v-col cols="8" v-for="(field, key, index) in fields" :key="field.title">
                  <v-text-field
                    v-if="field.type === 'string'"
                    :label="field.title"
                    v-model="form[key]"
                    required
                    :rules="[v => !!v || 'Необходимо ввести значение']"
                  />
                  <v-select
                    v-else
                    :label="field.title"
                    :items="field.values"
                    v-model="form[key]"
                    required
                    :rules="[v => !!v || 'Необходимо ввести значение']"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submit"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import {mapActions, mapMutations} from "vuex";

export default {
  name: "AnimalsForm",
  async fetch() {
    this.fields = (await this.$axios.$get('/api/farm/baby/form')).fields
  },
  data() {
    return {
      valid: true,
      dialog: false,
      fields: '',
      form: {
        type: '',
        name: '',
        weight: 0,
        color: '',
        sex: ''
      }
    }
  },
  methods: {
      ...mapActions({
        getAnimals: 'animals/getAnimals'
      }),
      ...mapMutations({
        setAnimals: 'animals/setAnimals'
      }),
    async submit() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        this.dialog = false
        const formData = new FormData
        formData.append('color', 'red')
        Object.keys(this.form).forEach(key => {
          formData.append(key, this.form.key)
        })
        this.$axios.$post('/api/farm/baby', formData, {headers:{
          'Content-Type': 'multipart/form-data',
        }},).then((res) => {
          console.log(res.data);
        });
        const animals = await this.getAnimals();
        this.setAnimals(animals)
      }
    },

  }
}
</script>

<style scoped>

</style>
