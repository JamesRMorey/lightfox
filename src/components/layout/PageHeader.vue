<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();

const headerIsSticky = ref(false);
const hideSticky = ref(true);


onMounted(() => {
    document.addEventListener('scroll', handleScroll);
});

const handleScroll = ( e ) => {
    const threshold = window.innerHeight/4;

    if ( window.scrollY > threshold / 2) {
        hideSticky.value = false;
    } else {
        hideSticky.value = true;
    }

    if ( headerIsSticky.value == true && window.scrollY > threshold ) return;

    if ( window.scrollY > threshold ) {
        headerIsSticky.value = true;
    } else {
        headerIsSticky.value = false
    }
}

</script>

<template>
    <header>
        <nav class="bg-purple-600 py-4 flex w-full justify-between items-center fixed z-50 shadow-xl">
            <div class="flex items-center justify-center gap-16 mx-auto max-w-screen-xl w-full text-white">
                <div class="flex gap-8 items-center text-sm w-96 justify-end uppercase">
                    <div>Our Work</div>
                    <div>Hosting</div>
                </div>
                <!-- <div class="font-beon text-4xl">LightFox</div> -->
                <img 
                    src="https://brave.co.uk/wp-content/uploads/2023/07/Brave-Logo-cover-Image.svg" 
                    class="h-12 transition-all ease-in-out"
                    :class="headerIsSticky && 'h-8'"
                />
                <div class="flex gap-8 items-center text-sm w-96 uppercase">
                    <div>Capabilities</div>
                    <div>Contact</div>
                </div>
            </div>
        </nav>
    </header>
</template>
