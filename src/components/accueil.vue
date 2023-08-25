<template>
<div class="container w-full">

</div>
  <p class="bg-white h-4"></p>


  <div class=" bg-white ">

    <div class="mx-auto  max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 border-2 rounded-lg  ">

      <div class="tabs bg-neutral-100  tabs-boxed">
        <a v-for="city in cities" :key="city" :class="{ 'tab text-black': true, 'bg-white': isTabActive(city) }" @click="selectedCity = city">{{ city }}</a>

      </div>


      <h2 class="text-2xl font-bold tracking-tight text-gray-900 bg-neutral-100 mb-6 py-2 px-4">Ce mois ci </h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="event in filteredEvents"  :key="event.id" :href="event.href" class="group">
          <div
              class="aspect-h-1  h-80 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="event.imageSrc" :alt="event.imageAlt"
                 class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h1 class="mt-4 text-xl font-medium text-gray-700">{{ event.name }}</h1>
          <p class="mt-1 text-sm font-medium text-gray-900">{{ event.date }} at {{ event.time }}</p>
          <p class="mt-1 text-gray-500 h-14">{{ event.address }}</p>
          <span class="flex justify-center">
            <button class="btn btn-outline text-black w-full">
              <a href="https://wa.me/33676492528" target="_blank">
      Réserver
    </a>
            </button> </span>
        </a>

      </div>


    </div>
  </div>


</template>


<script lang="ts" setup>
import {computed, ref} from 'vue'

const mobileMenuOpen = ref(false)
let events = ref(
    [
      {
        id: 1,
        name: 'Summer Music Festival',
        address: '123 Main Street, Cityville',
        date: '2023-08-30',
        time: '18:00',
        ville:'lille',
        imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-music-festival-design-template-c9e2e18c6640d58c7f329b15718a7219_screen.jpg?ts=1636967294',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Caribbean Dance Night',
        address: '456 Ocean Avenue, Beachtown',
        date: '2023-09-15',
        time: '20:30',
        ville:'bordeaux',
        imageSrc: 'https://dc.caribbeanist.com/wp-content/uploads/2023/06/d11dcfcaec31ca0f8d41b6ab0ff760a4.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 3,
        name: 'Reggae Rhythms Showcase',
        address: '789 Grove Lane, Grovetown',
        date: '2023-09-28',
        time: '19:00',
        ville:'lille',
        imageSrc: 'https://www.dancehallreggaeworld.com/images/join-us-on-july-9-for-island-reggae-festival-san-jose-ca-21856638.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 4,
        name: 'Zouk Dance Party',
        address: '101 Salsa Street, Dancetown',
        date: '2023-10-10',
        time: '21:00',
        ville:'lille',
        imageSrc: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F575893069%2F311847568670%2F1%2Foriginal.20230815-171158?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=7cab94820de246e510a65d9c8e2c9ffe',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 5,
        name: 'Island Vibes Carnival',
        address: '555 Palm Beach Road, Tropicville',
        date: '2023-11-02',
        time: '16:00',
        ville:'paris',
        imageSrc: 'https://data.bizouk.com/cache1/events/images/05/67/37/36a026e0c38a336504b10240b32fed88_700_800_auto_97.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Rasta Jam Session',
        address: '420 Bob Marley Boulevard, Reggaeville',
        date: '2023-11-20',
        time: '18:30',
        ville:'lille',
        imageSrc: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F574830219%2F503286591525%2F1%2Foriginal.20230814-133339?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=3c498ffc8c8d41954f4a52cf01f6c002',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 7,
        name: 'Soca Extravaganza',
        address: '888 Calypso Lane, Carnival City',
        date: '2023-12-05',
        time: '19:00',
        ville:'paris',
        imageSrc: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/9/c/d/30a8-9fc7-442e-baa3-993979896cfb',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 8,
        name: 'Dancehall Clash',
        address: '666 Kingston Street, Dancehall Heights',
        date: '2023-12-18',
        time: '20:00',
        ville:'paris',
        imageSrc: 'https://m.media-amazon.com/images/I/6157+5BNF8L._UXNaN_FMjpg_QL85_.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      }
      // Plus d'événements...
    ]
);
const isTabActive = (city) => selectedCity.value === city;

const selectedCity = ref('paris');

const cities = ['paris', 'bordeaux', 'lille', 'londres', 'portugal'];

const filteredEvents = computed(() => {
  return events.value.filter(event => event.ville === selectedCity.value);
});

</script>

<style scoped>
    .container{
      background-image: url(@/assets/images/paris-night-view-HD-wallpaper.webp);
      height: 30em;
      background-size: cover;
      background-position: center;
    }
</style>