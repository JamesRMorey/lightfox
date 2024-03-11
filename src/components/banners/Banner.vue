<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <div class="h-screen w-full relative">
        <img class="object-cover object-center h-full w-full" src="/images/space_man_1.png" />
        <div class="absolute top-0 flex h-full w-full justify-center items-center z-10" style="position: absolute;">
            <img src="https://brave.co.uk/wp-content/uploads/2023/07/Brave-Logo-cover-Image.svg" class="h-36"/>
        </div>
    </div>
</template>
