

const projects = [
    {
        id: 1,
        title: "Corporate Network Install",
        category: "Networking",
        description: "Full structured cabling and server rack installation for a mid-sized office.",
        imageUrl: "https://placehold.co/600x400/d72638/ffffff?text=Network+Install"
    },
    {
        id: 2,
        title: "Gaming PC Build",
        category: "Computing",
        description: "Custom water-cooled gaming rig with high-end components.",
        imageUrl: "https://placehold.co/600x400/0b0014/ffffff?text=Gaming+PC"
    },
    {
        id: 3,
        title: "Office Supply Logistics",
        category: "Supplies",
        description: "Bulk supply delivery and inventory management system implementation.",
        imageUrl: "https://placehold.co/600x400/a85a00/ffffff?text=Office+Supplies"
    },
    {
        id: 4,
        title: "Security Camera System",
        category: "Deep Security",
        description: "Installation of 16-camera IP security system with remote monitoring.",
        imageUrl: "https://placehold.co/600x400/333333/ffffff?text=Security+Cams"
    },
    {
        id: 5,
        title: "Website Development",
        category: "Development",
        description: "Responsive e-commerce website for a local retailer.",
        imageUrl: "https://placehold.co/600x400/a9e5bb/0b0014?text=Web+Dev"
    },
    {
        id: 6,
        title: "Server Maintenance",
        category: "Networking",
        description: "Routine maintenance and hardware upgrade for enterprise servers.",
        imageUrl: "https://placehold.co/600x400/555555/ffffff?text=Server+Maint"
    }
];

const galleryContainer = document.getElementById('project-gallery');

if (galleryContainer) {

    galleryContainer.innerHTML = '';


    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.setAttribute("data-id", project.id);

        const img = document.createElement("img");
        img.setAttribute("src", project.imageUrl);
        img.setAttribute("alt", project.title);
        img.setAttribute("loading", "lazy");

        const info = document.createElement("div");
        info.classList.add("project-info");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const category = document.createElement("p");
        category.classList.add("category");
        category.innerHTML = `<strong>${project.category}</strong>`;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        info.appendChild(title);
        info.appendChild(category);
        info.appendChild(desc);

        card.appendChild(img);
        card.appendChild(info);

        galleryContainer.appendChild(card);
    });
}
