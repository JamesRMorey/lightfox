<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface IconBox {
    title: String,
    text: String,
    icon: String,
}

const props = defineProps({
    icons: {
        type: Array<IconBox>,
        required: false,
    }
});

</script>

<template>
    <div class="section container flex flex-col gap-10">
        <div class="text-4xl -mb-10">Our Capabilities</div>
        <div class="grid grid-cols-4 gap-10">
            <div class="flex flex-col gap-2">
                <div class="aspect-square mb-2 flex justify-center items-center"><font-awesome-icon icon="fa-brands fa-app-store-ios" class="w-56 h-56"/></div>
                <div class="text-xl font-bold">Apps</div>
                <div class="text-lg">Bespoke apps designed from the ground up to suit your requirements. From simple offline apps with a few screens, to full blown 40+ screen dynamic online apps, <span class="font-bold">we have done it ALL</span>. All our apps are available on both Android and iOS.</div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="aspect-square mb-2 flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-globe" class="w-56 h-56"/></div>
                <div class="text-xl font-bold">Websites</div>
                <div class="text-lg">Affordable hosting packages and stunning websites designed and built to suit your requirements. Our developers have worked for some of the top web agencies in the UK. <span class="font-bold">We have you covered, for everything.</span></div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="aspect-square mb-2 flex justify-center items-center"><font-awesome-icon icon="fa-brands fa-google" class="w-56 h-56"/></div>
                <div class="text-xl font-bold">SEO</div>
                <div class="text-lg"><span class="font-bold">Improve your websites search rankings</span> and organic traffic, drive sales from relevant searches. All our websites are fully SEO optimised, our SEO specialists guarentee your site will have a <span class="font-bold">100/100 score on google lighthouse.</span></div>
            </div>
            <div class="flex flex-col gap-2 ">
                <div class="aspect-square mb-2 flex justify-center items-center relative"><font-awesome-icon icon="fa-brands fa-facebook" class="w-48 h-48 absolute left-5 top-16"/><font-awesome-icon icon="fa-brands fa-instagram" class="w-48 h-48 absolute right-5 bottom-16"/></div>
                <div class="text-xl font-bold">Ads</div>
                <div class="text-lg">Facebook and Instagram ads are our speciality. <span class="font-bold">We can drive more traffic to your site</span>, with a wide variety of packages available to suit all budgets. Google keywords more your thing? Well, we're great at that too :)</div>
            </div>
        </div>
    </div>
</template>
