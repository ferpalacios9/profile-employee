<template>
    <a href="#" @click.prevent="props.item.onClick">
        <div class="item">
            <div class="icon">
                <font-awesome-icon :icon="['fa-solid', props.item.icon]" size="2x" />
            </div>
            <div class="title">{{ props.item.title }}</div>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(["item"]);
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
    display: block;
}

a:hover {
    background-color: #1E1E1E;
    color: white;
}

.item {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.item .icon {
    width: 80px;
    display: flex;
    justify-content: center;
}

@media (max-width: 800px) {
    .title {
        display: none;
    }

    .item {
        justify-content: center;
    }
}

@media (max-width: 400px) {
    .item .icon {
        width: auto;
        display: flex;
        justify-content: center;
        color: black;
    }
}
</style>