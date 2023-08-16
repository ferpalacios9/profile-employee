<template>
    <div class="card">
        <div class="image-profile">
            <img :src="require('@/assets/img/' + profile.image)" alt="">
        </div>
        <h4 class="name">{{ profile.name }}</h4>
        <div class="info">
            <ul>
                <li>
                    <span>Company</span>
                    <p>{{ profile.company }}</p>
                </li>
                <li>
                    <span>Experience</span>
                    <p>{{ profile.yexperience }} years and {{ profile.mexperience }} months</p>
                </li>
                <li>
                    <span>Birth Date</span>
                    <p>{{ profile.birthdate }}</p>
                </li>
                <li>
                    <span>Hire Date</span>
                    <p>{{ profile.hiredate }}</p>
                </li>
                <li>
                    <span>Truck Number</span>
                    <p>{{ profile.truck }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import MenuItems from "./MenuItems.js";

const { profile } = MenuItems;
</script>

<style scoped>
.card {
    width: 300px;
    border-radius: 10px;
}

.card h4 {
    text-align: center;
    margin-bottom: 16px;
}

.image-profile {
    display: flex;
    justify-content: center;
    margin: 16px 0;
}

.card img {
    width: 150px;
    clip-path: circle();
    object-fit: cover;
}

.info ul {
    font-size: 13px;
    list-style: none;
}

.info span {
    color: gray;
}

.info p {
    margin-bottom: 10px;
}</style>