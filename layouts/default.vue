<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-row align="center">
        <v-col cols="3">
          <Logo/>
        </v-col>
        <v-col cols="9">
          <v-toolbar-title v-text="title"/>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-list>
              <v-list-item
                nuxt
                v-for="item in items"
                :key="item.to"
                :to="item.to"
              >
                <v-list-item-icon>
                  <v-icon>
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"/>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <LeftWidget/>
          </v-col>
          <v-col cols="9">
            <Nuxt/>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "../components/Logo";
import LeftWidget from "../components/LeftWidget";

export default {
  name: 'DefaultLayout',
  components: {LeftWidget, Logo},
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-face-man',
          title: 'О нас',
          to: '/about-us'
        },
        {
          icon: 'mdi-cow',
          title: 'Создать новое животное',
          to: '/form'
        }
      ],
      title: 'Фермерский роддом номер 5'
    }
  }
}
</script>
