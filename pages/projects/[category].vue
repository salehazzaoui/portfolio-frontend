<script setup>
definePageMeta({
  title: 'Projects'
});
const route = useRoute();
const query = groq`*[_type == "project" && category->slug.current == "${route.params.category}" ]{
   title,
   "category": category->title,
   "category_slug": category->slug.current,
   "tags": tags[]->title,
   "imageUrl": mainImage.asset->url,
    github,
     body,
} | order(publishedAt desc)`;
const { data: projects } = useSanityQuery(query);

</script>

<template>
    <div>
        <Intro name="Projects" icon="mdi-application-brackets"/>
      <v-container grid-list-lg>
        <v-row>
          <v-col v-for="project in projects">
            <Project :title="project.title" :image-url="project.imageUrl" :category="project.category" :github="project.github" :tags="project.tags" :body="project.body" />
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>