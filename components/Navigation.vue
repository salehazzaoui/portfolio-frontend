<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useOpenAppBar } from "../composabales/states";
const isOpen = useOpenAppBar();
const { width } = useDisplay();

const isGreaterThenMd = ref(false);
const setIsGreaterThenMd = () => width.value > 1280 ? isGreaterThenMd.value = true : isGreaterThenMd.value = false;
watch(isGreaterThenMd, setIsGreaterThenMd, { immediate: true });

const query = groq`*[_type == "author"][0]{
  name,
  title,
  "imageUrl": image.asset->url,
  facebook_url,
  linkedin_url,
  twitter_url,
  instagram_url
}`;
const { data: author } = useSanityQuery(query);
</script>

<template>
    <v-navigation-drawer :temporary="isGreaterThenMd" v-model="isOpen">
        <main class="d-flex align-center justify-center h-100">
            <div class="d-flex flex-column align-center justify-space-around h-100 w-100">
                <div class="d-flex flex-column align-center justify-center">
                    <v-avatar
                        size="80"
                        color="surface-variant"
                    >
                        <v-img :src="author?.imageUrl" :alt="author?.name" :cover="true"></v-img>
                    </v-avatar>
                    <v-list-item
                        class="text-white text-center"
                        :title="author?.name"
                        :subtitle="author?.title"
                    ></v-list-item>
                </div>
                <v-list nav class="d-flex flex-column align-center justify-center w-100">
                    <v-list-item title="Home" value="home" class="w-100 text-center" to="/"></v-list-item>
                    <v-list-item title="Projects" value="projects" class="w-100 text-center" to="/projects"></v-list-item>
                    <v-list-item title="Categories" value="categories" class="w-100 text-center" to="/categories"></v-list-item>
                    <v-list-item title="Skills" value="skills" class="w-100 text-center" to="/skills"></v-list-item>
                    <v-list-item title="About Me" value="about me" class="w-100 text-center" to="/about"></v-list-item>
                    <v-list-item title="Contact Me" value="contact me" class="w-100 text-center" to="/contact"></v-list-item>
                </v-list>
                <div class="d-flex align-center">
                    <a :href="author.facebook_url" target="_blank" class="mx-2 text-white"><v-icon icon="mdi-facebook"></v-icon></a>
                    <a :href="author.linkedin_url" target="_blank" class="mx-2 text-white"><v-icon icon="mdi-linkedin"></v-icon></a>
                    <a :href="author.twitter_url" target="_blank" class="mx-2 text-white"><v-icon icon="mdi-instagram"></v-icon></a>
                    <a :href="author.instagram_url" target="_blank" class="mx-2 text-white"><v-icon icon="mdi-twitter"></v-icon></a>
                </div>
            </div>
        </main>
    </v-navigation-drawer>
</template>