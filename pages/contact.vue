<script setup>
definePageMeta({
  title: 'Contact'
});
</script>

<template>
    <div class="h-screen">
      <Intro name="Contact" icon="mdi-email"/>
      <div class="d-flex align-center mt-10">
        <v-list density="compact" class="w-50 mx-10">
          <v-list-subheader>Haiba Azzaoui</v-list-subheader>

          <v-list-item
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-email"></v-icon>
            </template>
            <v-list-item-title><a href="mailto:saleh_azzaoui@hotmail.com">saleh_azzaoui@hotmail.com</a></v-list-item-title>
          </v-list-item>
          <v-list-item
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-phone"></v-icon>
            </template>
            <v-list-item-title><a href="tel:+213553595300">0553595300</a></v-list-item-title>
          </v-list-item>
          <v-list-item
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-linkedin"></v-icon>
            </template>
            <v-list-item-title><a href="http://https://www.linkedin.com/in/saleh-azzaoui-101948216/" target="_blank" rel="noopener noreferrer">Linkedin</a></v-list-item-title>
          </v-list-item>
          <v-list-item
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-github"></v-icon>
            </template>
            <v-list-item-title><a href="https://github.com/salehazzaoui" target="_blank" rel="noopener noreferrer">Github</a></v-list-item-title>
          </v-list-item>
          <v-list-item
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-facebook"></v-icon>
            </template>
            <v-list-item-title><a href="https://www.facebook.com/saleh.azzaoui11" target="_blank" rel="noopener noreferrer">Facebook</a></v-list-item-title>
          </v-list-item>
        </v-list>
        <form class="w-50 mx-10">
          <v-text-field
            :counter="10"
            label="Name"
          ></v-text-field>
          <v-text-field
            :counter="7"
            label="Phone Number"
          ></v-text-field>
          <v-text-field
            label="E-mail"
          ></v-text-field>
          <v-textarea label="Message"></v-textarea>
          <v-btn
            class="me-4"
            type="submit"
          >
            submit
          </v-btn>
        </form>
      </div>
    </div>
</template>