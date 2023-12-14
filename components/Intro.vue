<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="d-flex align-center">
        <v-icon :icon="icon"></v-icon>
        <h3 class="ma-2">{{ name }}</h3>
    </div>
</template>