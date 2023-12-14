<script setup>
import { useOpenAppBar } from "../composabales/states";
const isOpen = useOpenAppBar();
const route = useRoute();
const setIsOpen = () => {
    isOpen.value = !isOpen.value;
};

</script>

<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="setIsOpen" class="d-lg-none"></v-app-bar-nav-icon>
        <v-app-bar-title>{{ route.meta.title }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <div class="d-flex align-center justify-center mx-4 w-33 mt-4">
            <v-text-field
                name="search"
                label="Search"
                id="serach"
                append-inner-icon="mdi-magnify"
                variant="solo"
                class="d-none d-lg-inline-block"
            ></v-text-field>
        </div>
        <v-btn icon class="d-lg-none">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
</template>