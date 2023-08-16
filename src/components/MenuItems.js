export default {
    profile: {
        image: "profile.jpg",
        name: "John Smith",
        company: "Amazon",
        yexperience: "3",
        mexperience: "11",
        birthdate: "08 / 15 / 1990",
        hiredate: "10 / 24 / 2020",
        truck: "#45625632",
    },

    shipments: [
        {
            id: 146585,
            status: "Completed",
        },
        {
            id: 854796,
            status: "Completed",
        },
        {
            id: 254182,
            status: "Completed",
        },
        {
            id: 134755,
            status: "In progress",
        },
        {
            id: 967423,
            status: "In progress",
        },
        {
            id: 128476,
            status: "In progress",
        },
    ],

    items: [
        {
            id: 0,
            title: "Home",
            icon: "fa-house",
            onClick() {
                console.log("Home")
            },
        },
        {
            id: 1,
            title: "Manage Employees",
            icon: "fa-users",
            onClick() {
                console.log("Employees")
            },
        },
        {
            id: 2,
            title: "Settings",
            icon: "fa-gear",
            onClick() {
                console.log("Settings")
            },
        },
    ]
}