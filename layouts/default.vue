<template>
    <v-layout class="rounded rounded-md">
        <Navigation />

        <AppBar />

        <v-main style="min-height: 300px;">
            <v-container style="max-width: 986px;">
                <slot />
            </v-container>
            <v-footer>
                <div class="w-100">
                   <p class="text-center text-body-2">{{ new Date().getFullYear() }} — <strong>Dev</strong> All rights reserved</p>
                </div>
            </v-footer>
        </v-main>
    </v-layout>
</template>