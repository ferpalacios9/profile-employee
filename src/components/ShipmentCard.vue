<template>
    <div class="card">
        <div class="shipments-list">
            <ul>
                <h3>COMPLETED</h3>
                <h4>Shipment ID</h4>
                <li v-for="shipment in completedShipments" :key="shipment.id">
                    <div class="shipment-item">
                        <p>{{ shipment.id }}</p>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'circle-check']" size="2x" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="card">
        <div class="shipments-list">
            <ul>
                <h3>IN PROGRESS</h3>
                <h4>Shipment ID</h4>
                <li v-for="shipment in progressShipments" :key="shipment.id">
                    <div class="in-progress">
                        <p>{{ shipment.id }}</p>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'clock']" size="2x" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import MenuItems from "./MenuItems.js";

const { shipments } = MenuItems;
const completedShipments = shipments.filter(shipment => shipment.status === "Completed");
const progressShipments = shipments.filter(shipment => shipment.status === "In progress");

console.log(completedShipments)
</script>

<style scoped>
.card {
    width: 400px;
    padding-right: 32px;
}

.shipments-list ul {
    list-style: none;
}

.shipments-list h4 {
    font-size: 18px;
    color: gray;
    margin: 8px 0;
}

.shipments-list h3 {
    font-size: 24px;
    margin: 8px 0;
    font-weight: 600;
}

.shipment-item {
    display: flex;
    justify-content: space-between;
    color: green;
}

.shipment-item p {
    margin: 10px 0;
}

.in-progress {
    display: flex;
    justify-content: space-between;
    color: orange;
}

.in-progress p {
    margin: 10px 0;
}

.icon {
    display: flex;
    align-items: center;
}

@media (max-width: 1070px) {
    .card {
        width: 300px;
    }
}

@media (max-width: 979px) {
    .card {
        margin-top: 50px;
    }
}
</style>