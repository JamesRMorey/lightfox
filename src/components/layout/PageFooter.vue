<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <footer class="bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-16 lg:py-24 text-white">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 text-white w-80">
                <router-link :to="{ name: 'home' }" >
                    <img 
                        src="https://brave.co.uk/wp-content/uploads/2023/07/Brave-Logo-cover-Image.svg" 
                        class="h-12 transition-all ease-in-out"
                        :class="headerIsSticky && 'h-8'"
                    />
                </router-link>
                <div class="flex-col flex gap-1 mt-3">
                    <div class="font-bold text-sm">
                        The best collection of wild spots in the UK.
                    </div>
                    <div class="text-sm">
                        Find your next wild camping adventure, learn new skills, join our community.
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
                <div>
                    <h2 class="mb-2 text-sm font-semibold uppercase">Blog</h2>
                    <hr/>
                    <ul class="font-medium mt-4">
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Gear Reviews</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Camping Tips</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">How To's</router-link> 
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-2 text-sm font-semibold uppercase">Pages</h2>
                    <hr/>
                    <ul class="font-medium mt-4">
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Home</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Our Work</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">SEO</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Websites</router-link> 
                        </li>
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }" class="hover:underline ">Mobile Apps</router-link> 
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-2 text-sm font-semibold uppercase">Follow us</h2>
                    <hr/>
                    <ul class="font-medium mt-4">
                        <li class="mb-4">
                            <a href="https://www.instagram.com/wildpitch_camping/" target="_blank" class="hover:underline ">Instagram</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.instagram.com/wildpitch_camping/" target="_blank" class="hover:underline ">Linked In</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-2 text-sm font-semibold uppercase">Other Stuff</h2>
                    <hr/>
                    <ul class="font-medium mt-4">
                        <li class="mb-4">
                            <router-link :to="{ name: 'home' }"  class="hover:underline">
                                Privacy Policy
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center">© 2023 <a href="/" class="hover:underline">WildPitch</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="https://www.instagram.com/wildpitch_camping/" target="_blank" class="hover:text-gray-900">
                    <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
                    <span class="sr-only">Instagram</span>
                </a>
            </div>
        </div>
        </div>
    </footer>
</template>