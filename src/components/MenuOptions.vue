<template>
    <div class="menu">
        <div class="menu-items">
            <ul>
                <MenuItem v-for="menuItem in MenuItems.items" 
                :key="menuItem.id" 
                :item="menuItem">
                </MenuItem>
            </ul>
        </div>
    </div>
</template>

<script setup>
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem.vue";
</script>

<style scoped>
.menu {
    background-color: #352A2C;
    width: 300px;
    color: white;
    height: 250vh;
    padding-top: 20px;
}

.menu-items ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

@media (max-width: 400px) {
    .menu {
        width: auto;
        background-color: #FAFAFC;
    }   
}

</style>