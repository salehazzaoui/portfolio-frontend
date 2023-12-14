<script setup>
definePageMeta({
  title: 'Skills'
});
const query = groq`*[_type == "skills"]{
  title,
  "slug": slug.current,
  "imageUrl": image.asset->url
}`;
const { data: skills } = useSanityQuery(query);
</script>

<template>
    <div>
        <Intro name="Skills" icon="mdi-star" />
        <v-container grid-list-lg>
          <v-row v-if="skills == null">
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" lg="4" >
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col v-for="skill in skills" cols="12" md="6" lg="4" >
              <v-card class="mx-auto rounded-circle percentage" width="300">
                <div class="py-2">
                  <v-img :src="skill.imageUrl" :alt="skill.title" height="250px"></v-img>
                </div>
                <v-card-title primary-title class="text-center">
                  {{ skill.title }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.percentage{
  border: 5px solid rgb(165, 160, 160);
}
</style>