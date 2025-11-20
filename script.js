const users = [
  {
    name: "Chole",
    role: "Designer",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Figma", "UI/UX"],
    rating: 4.5,
    earned: "15K+",
    rate: "$80/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Ava",
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Node"],
    rating: 4.8,
    earned: "22K+",
    rate: "$95/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Liam",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Django"],
    rating: 4.6,
    earned: "18K+",
    rate: "$85/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Sophia",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Photoshop", "Illustrator"],
    rating: 4.7,
    earned: "12K+",
    rate: "$70/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Noah",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Flutter", "Kotlin"],
    rating: 4.9,
    earned: "30K+",
    rate: "$110/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Emma",
    role: "Content Writer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Copywriting", "SEO"],
    rating: 4.4,
    earned: "10K+",
    rate: "$45/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "James",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Excel", "Tableau"],
    rating: 4.8,
    earned: "25K+",
    rate: "$100/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  },
  {
    name: "Mia",
    role: "Video Editor",
    image: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Premiere Pro", "DaVinci"],
    rating: 4.3,
    earned: "14K+",
    rate: "$60/hr",
    buttonText: "Get in touch",
    saveIcon: "./assets/save.png"
  }
];

let sum = ''

users.forEach(function(user){
    sum += ` <div class="card">
                <img src=${user.image} alt="">
                <h1>${user.name}</h1>
                <h3>${user.role}</h3>
                <div id="tags">
                    <h5>${user.tags[0]}</h5>
                    <h5>${user.tags[1]}</h5>
                </div>
                <div id="details">
                    <div id="left">
                        <h2><i class="ri-star-fill"></i>${user.rating}</h2>
                        <h3>Ratings</h3>
                    </div>
                    <div id="center">
                        <h2>${user.earned}</h2>
                        <h3>Earned</h3>
                    </div>
                    <div id="right">
                        <h2>${user.rate}</h2>
                        <h3>Rate</h3>
                    </div>
                </div>
                <div id="bottom">
                    <button>Get in touch</button>
                    <img src="./assets/save.png" alt="">
                </div>
            </div>`
})

let container = document.querySelector('#container')
container.innerHTML = sum