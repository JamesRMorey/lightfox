<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <div class="w-1/2 flex flex-col gap-5 items-center">
        <div class="h-48 w-72 bg-purple-600"></div>
        <div class="flex flex-row gap-5">
            <div class="aspect-video h-60 bg-purple-600"></div>
            <div class="h-48 w-36 bg-purple-600"></div>
        </div>
        <div class="flex flex-row ml-20 gap-5">
            <div class="h-48 w-72 bg-purple-600"></div>
        </div>
    </div>
</template>
