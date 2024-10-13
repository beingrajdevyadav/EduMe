// Course Object Sample 
const courseObject = {
    course:"string",
    courseName : "string",
    courseDescription: "string",
    courseThumbnailUrl: "string",
    rating: {
        stars: Number,
        counts: Number,
    },
    instructor: {
        name: "string",
        imgUrl: "string",
    },
    courseDuration: {
        hours: Number,
        lectures: Number,
    },
    coursePrice: Number,
    courseLevel: {
        begginer: Boolean,
        intermediate: Boolean,
        export: Boolean,
        allLevel: Boolean,
    },
    courseTag: {
        bestSeller: Boolean,
        newest: Boolean,
        popular: Boolean,
    },
    courseType: {
        paid: Boolean,
        free: Boolean,
    },
    courseTopic: "string",
    courseFeatures:{
        subtitle: Boolean,
        quizes: Boolean,
        codingExercise: Boolean,
        practiceTest: Boolean,
    }
    }

    // instructors name and their imgUrl 
    // Rahul Sir
    // https://t3.ftcdn.net/jpg/08/01/90/88/360_F_801908826_56OzTbSrDVqHus4slOEhn6eYrjEkBuAT.jpg

    // 2. Areeba Ma'am 
    // https://i.pinimg.com/736x/70/aa/28/70aa28f678193194b4a023e542ce4775.jpg

    // 3. Vania Ma'am 
    // https://image.cdn2.seaart.ai/2023-11-13/22535011998653445/a8bfdc40a91b452c2e7d0721bb1e06ff75344cae_high.webp

    // 4. Saeed Sir
    // Web Developer, php, wordpress,  HTML, CSS, and JavaScript, with strong skills in Astrobuild, Tailwind, Alpinejs and Vuejs.
    // 

    // 5. Anob-Ejah Ma'am
    // https://img.freepik.com/premium-photo/pretty-young-african-american-woman-beautiful-black-woman-ai_101266-27562.jpg

    // 6. Tushar Mahajan
    // IOS || Android || Web || Former iOS Application Developer Intern at Infosys
    // iOS Development • SwiftUI • Agile Methodologies • Android Development • Kotlin
    // https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/77106652-5e5b-4063-ab1c-312a04246222/82d8c885-ab64-4dcb-8019-94ba100ce366.png



     // 1
   course=  {
        course: "html",
        courseName: "HTML Foundations",
        courseDescription: "Learn the basics of HTML and build a strong foundation for web development.",
        courseThumbnailUrl: "https://miro.medium.com/v2/resize:fit:1280/1*wN4fuuYc-MkF2-CTFB1cVg.jpeg",
        rating: {
            stars: 4.5,
            counts: 956,
        },
        instructor: {
            name: "Vania Ma'am     ",
            imgUrl: "https://i.pinimg.com/736x/70/aa/28/70aa28f678193194b4a023e542ce4775.jpg",
        },
        courseDuration: {
            hours: 3,
            lectures: 15,
        },
        coursePrice: 399,
        courseLevel: {
            begginer: true,
            intermediate: false,
            export: false,
            allLevel: false,
        },
        courseTag: {
            bestSeller: false,
            newest: true,
            popular: false,
        },
        courseType: {
            paid: true,
            free: false,
        },
        courseTopic: "html",
        courseFeatures: {
            subtitle: true,
            quizes: true,
            codingExercise: true,
            practiceTest: true,
        }
    }