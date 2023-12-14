<script setup>
defineProps({
    title: {
        require: true,
        type: String
    },
    category: {
        require: true,
        type: String
    },
    imageUrl: {
        require: true,
        type: String
    },
    github:  {
        require: true,
        type: String
    },
    tags:  {
        require: true,
        type: Array
    },
    body:  {
        require: true,
        type: String
    },
});
const loading = ref(false);
const selection = ref(1);

const explore = () => {
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
};
</script>

<template>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        cover
        height="250"
        :src="imageUrl"
      ></v-img>
  
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>
  
        <v-card-subtitle>
          <span class="me-1">{{ category }}</span>
          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text class="overflow-hidden" style="height: 40px;">
        {{ body }}
      </v-card-text>
  
      <v-divider class="mx-4 mb-1"></v-divider>
  
      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip v-for="tag in tags">{{ tag }}</v-chip>
        </v-chip-group>
      </div>
  
      <v-card-actions>
        <v-btn
          color="green-lighten-2"
          variant="text"
          @click="explore"
          append-icon="mdi-more"
        >
          Explore
        </v-btn>
        <v-btn color="info" append-icon="mdi-github" :href="github">See Github</v-btn>
      </v-card-actions>
    </v-card>
  </template>