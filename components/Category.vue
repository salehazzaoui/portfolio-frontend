<script setup>
defineProps({
    title: {
        require: true,
        type: String
    },
    slug: {
        require: true,
        type: String
    },
    projects: {
        require: true,
        type: Number
    }
});
const router = useRouter();

const navigateToProjects = (slug) => {
   router.push(`/projects/${slug}`);
}

</script>

<template>
    <div class="d-flex align-center justify-space-between pa-4 elevation-10 bg-grey-darken-1 w-100 my-4">
        <div class="d-flex align-center">
            <v-icon icon="mdi-folder"></v-icon>
            <h3 class="mx-1 text-h6 text-orange-accent-1">{{ title }}</h3>
            <p class="mx-1 text-sm">{{ projects }} projects</p>
        </div>
        <v-btn variant="text" @click="navigateToProjects(slug)"><v-icon icon="mdi-menu-right"></v-icon></v-btn> 
    </div>
</template>