<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '../components/layout/PageHeader.vue';
import Banner from '../components/banners/Banner.vue';
import PageFooter from '../components/layout/PageFooter.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MultiColumnIconText from '../components/content/MultiColumnIconText.vue';

const router = useRouter();

const topicIndex = ref(0);
const topics = ['build', 'imagine', 'develop', 'grow', 'design'];

const changeTopic = () => {
    if ( topicIndex.value >= topics.length -1 ) {
        topicIndex.value = 0;
        return;
    }

    topicIndex.value++;
}


const timer = ( ms ) => new Promise(res => setTimeout(res, ms))
const startTopicChange = async () => {
    while( true ) {
        changeTopic();
        await timer(1000)
    }
}

onMounted(() => {
    startTopicChange();
});

</script>

<template>
    <div>
        <PageHeader />
        <Banner />
        <div class="section flex-row items-center bg-gray-900 py-24">
            <div class="container text-white text-semibold"> 
                <span class="text-2xl">
                    You want it? We can deliver it. From stunning websites with cutting edge user experiences and jaw dropping graphics, to sleek mobile applications on android and IOS. If you can imagine it, we can do it.
                    So, lets <span class="text-purple-500 font-bold">{{ topics[topicIndex] }}</span> together.
                </span>
            </div>
        </div>
        <MultiColumnIconText />
        <div class="bg-gray-900">
            <div class="section container flex flex-col">
                <div class="text-4xl text-white">Some Of Our Work</div>
                <div class="w-full h-48 hover:h-96 transition-all ease-in-out bg-center bg-cover flex items-center justify-center" style="background-image: url('/images/im_puzzled_1.png');">
                    <h2 class="text-6xl text-white font-special-eilte">I'm Puzzled</h2>
                </div>
                <div class="w-full h-48 hover:h-96 transition-all ease-in-out bg-center bg-cover flex items-center justify-center" style="background-image: url('/images/wild_pitch_1.webp');">
                    <img src="/wild-pitch/text-white.webp" class="h-20"/>
                </div>
                <div class="w-full h-48 hover:h-96 transition-all ease-in-out bg-center bg-cover flex items-center justify-center" style="background-image: url('/images/escape_trails_1.png');">
                    <h2 class="text-6xl text-white">East Suffolk Council - ESCape Trails</h2>
                </div>
            </div>
        </div>
        
        <div class="section container grid grid-cols-2 py-32">
            <div class="flex flex-col gap-8 items-start">
                <div>
                    <div class="text-5xl">Ready To</div>
                    <div class="text-5xl text-purple-600">Work With Us?</div>
                </div>
                <button class="p-3 bg-purple-600 px-6 flex items-center gap-3 text-white">Contact Us <font-awesome-icon icon="fa-solid fa-arrow-right" class="w-5 h-5"/></button>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-5">
                    <div class="text-lg">Email</div>
                    <div>
                        <div class="text-lg">Work With Us</div>
                        <div class="text-lg font-bold">info@lightfox.co.uk</div>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <div class="text-lg">Say Hello</div>
                    <div>
                        <div class="text-lg">Give Us A Call</div>
                        <div class="text-lg font-bold">+44 7764429160</div>
                    </div>
                </div>
            </div>
        </div>
        <PageFooter />
    </div>
</template>
