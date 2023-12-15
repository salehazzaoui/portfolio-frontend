<script setup>
definePageMeta({
  title: 'Projects'
});
const query = groq`*[_type == "project"]{
   title,
   "category": category->title,
   "imageUrl": mainImage.asset->url,
   github,
   body,
   "tags": tags[]->title,
} | order(publishedAt desc)`;
const { data: projects } = useSanityQuery(query);
const query2 = groq`*[_type == "tag"]{
   title
}`;
const { data: tags } = useSanityQuery(query2);
const selection = ref(null);
</script>

<template>
    <div>
      <Intro name="Projects" icon="mdi-application-brackets"/>
      <v-chip-group v-model="selection" class="mt-2">
          <v-chip v-for="tag in tags">{{ tag.title }}</v-chip>
        </v-chip-group>
      <v-container grid-list-lg>
        <v-row v-if="projects == null">
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="mx-auto border"
              width="250"
              type="image, article"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-for="project in projects">
            <Project :title="project.title" :image-url="project.imageUrl" :category="project.category" :github="project.github" :tags="project.tags" :body="project.body" />
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>