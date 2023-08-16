<template>
    <div class="profile-container">
        <div class="header">
            <h1>Truck Driver Profile</h1>
        </div>
        <div class="panel">
            <div class="profile-driver">
                <ProfileCard />
            </div>
            <div class="shipments">
                <ShipmentCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfileCard from './ProfileCard.vue';
import ShipmentCard from './ShipmentCard.vue';

</script>

<style scoped>
.profile-container {
    flex-grow: 1;
    margin: 0 30px;
}

.header h1 {
    padding: 30px 0;
    font-size: 24px;
    margin: 0;
    font-weight: 600;
}

.panel {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.shipments {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>