<script setup>
definePageMeta({
  title: 'Home'
});
const query = groq`*[_type == "author"][0]{
  bio,
  description,
  "fileUrl": cv.asset->url
}`;
const { data: author } = useSanityQuery(query);
</script>

<template>
    <div>
        <Intro name="Home" icon="mdi-home"/>
        <div v-if="author == null" class="d-flex flex-column align-center align-lg-start pa-2">
          <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
          <v-skeleton-loader type="paragraph" class="w-100"></v-skeleton-loader>
          <v-skeleton-loader type="paragraph" class="w-100"></v-skeleton-loader>
        </div>
        <div v-else class="d-flex flex-column align-center align-lg-start pa-2">
            <h1 class="my-3 text-center text-lg-start text-lg-h3">{{ author?.bio[0].children[0].text }}</h1>
            <p class="my-3 text-center text-lg-start">{{ author?.description }}</p>
            <v-btn color="success" rounded="xl" :href="author?.fileUrl">See Cv</v-btn> 
        </div>
        <Shape />
    </div>
</template>