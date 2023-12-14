<script setup>
definePageMeta({
  title: 'About'
});
const query = groq`*[_type == "about_author"][0]{
  ...,
  "imageUrl": image.asset->url,
}`;
const { data: about_author } = useSanityQuery(query);
</script>

<template>
    <div>
        <Intro name="About" icon="mdi-account"/>
        <div class="d-flex align-start">
          <p class="my-3">{{ about_author.description }}</p>
          <v-avatar
            size="250"
            rounded="0"
          >
            <v-img :src="about_author.imageUrl"></v-img>
          </v-avatar>
        </div>
        <h1 class="text-center my-4">Education & courses</h1>
        <v-timeline align="start">
          <v-timeline-item
            v-for="(education, i) in about_author.education"
            :key="i"
            dot-color="green"
            size="small"
          >
            <template v-slot:opposite>
              <div
                :class="`pt-1 headline font-weight-bold text-green`"
                v-text="education.year"
              ></div>
            </template>
            <div>
              <h2 :class="`mt-n1 headline font-weight-light mb-4 text-green`">
                {{ education.title }}
              </h2>
              <div>
                {{ education.description }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <h1 class="text-center my-4">Experiences & Projects</h1>
        <v-timeline align="start">
          <v-timeline-item
            v-for="(experience, i) in about_author.experience"
            :key="i"
            dot-color="green"
            size="small"
          >
            <template v-slot:opposite>
              <div
                :class="`pt-1 headline font-weight-bold text-green`"
                v-text="experience.year"
              ></div>
            </template>
            <div>
              <h2 :class="`mt-n1 headline font-weight-light mb-4 text-green`">
                {{ experience.title }}
              </h2>
              <div>
                {{ experience.description }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
    </div>
</template>