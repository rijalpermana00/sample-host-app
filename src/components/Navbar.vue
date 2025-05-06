<script setup lang="ts">
    import { defineComponent, ref } from 'vue'
    
    interface NavLink {
        name: string;
        path: string;
        active: boolean;
    }
    
    const navLinks = ref<NavLink[]>([
        { name: 'Home', path: '/', active: true },
        { name: 'Dashboard', path: '/dashboard', active: false },
        { name: 'Calendar', path: '/calendar', active: false },
        { name: 'Top Up', path: '/top-up', active: false },
    ]);
</script>
  
<template>
    <nav class="bg-white rounded-full shadow-md py-2 px-4 md:px-8 fixed w-full max-w-7xl mx-auto top-4 z-50">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="relative">
            <div class="w-6 h-6 rounded-full bg-green-500"></div>
            <div class="w-6 h-6 rounded-full bg-lime-400 absolute -top-1 -left-1 -z-10"></div>
          </div>
          <span class="font-bold text-xl text-gray-800 flex items-center">
            <span>HCMS</span>
            <span class="text-gray-300 mx-2 sm:block">|</span>
            <span class="sm:block text-base font-normal text-gray-500">Human Capital Management System</span>
          </span>
        </div>
  
        <!-- Navigation Links -->
        <div class="md:flex space-x-8">
          <router-link 
            v-for="(link, index) in navLinks" 
            :key="index" 
            :to="link.path"
            class="text-gray-700 hover:text-green-600 transition-colors font-medium"
            :class="{ 'text-green-600 font-semibold': link.active }"
          >
            {{ link.name }}
          </router-link>
        </div>
  
        <!-- User Profile -->
        <div class="flex items-center">
          <button class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <span class="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  </template>