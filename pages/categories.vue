<script setup>
definePageMeta({
  title: 'Categories'
});
const query = groq`*[_type == "category"]{
  title,
  "slug": slug.current,
  projects,
}`;
const { data: categories } = useSanityQuery(query);
</script>

<template>
    <div class="h-screen">
      <Intro name="Categories" icon="mdi-developer-board"/>
      <div v-if="categories == null" class="d-flex flex-column align-center w-100">
        <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
        <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
        <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
        <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
        <v-skeleton-loader type="article" class="w-100"></v-skeleton-loader>
      </div>
      <div v-else class="d-flex flex-column align-center w-100">
        <div v-for="category in categories" class="w-100">
          <Category :title="category?.title" :slug="category?.slug" :projects="category?.projects?.length" />
        </div>
      </div>
    </div>
</template>