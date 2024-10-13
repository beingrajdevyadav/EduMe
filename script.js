// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                   courses list
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Courses = [
    // 1
    {
        course: "html",
        courseName: "HTML and Web Structure: The Essential Guide for New Developers",
        courseDescription: "Learn the fundamentals of HTML and how it forms the foundation of every website. This course will guide you through creating and structuring web content, embedding multimedia, and crafting well-organized web pages.",
        courseThumbnailUrl: "https://www.ptbsb.id/wp-content/uploads/2024/01/how-do-you-convert-flash-to-html5.jpg",
        rating: {
            stars: 4.5,
            counts: 956,
        },
        instructor: {
            name: "Vania Ma'am     ",
            imgUrl: "https://image.cdn2.seaart.ai/2023-11-13/22535011998653445/a8bfdc40a91b452c2e7d0721bb1e06ff75344cae_high.webp",
        },
        courseDuration: {
            hours: 3,
            lectures: 15,
        },
        coursePrice: 1399,
        courseLevel: {
            begginer: true,
            intermediate: false,
            expert: false,
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
    },
    {
        course: "html",
        courseName: "Mastering CSS: From Basics to Advanced Design",
        courseDescription: "This comprehensive CSS course will take you from a beginner to a proficient web designer. Learn the core principles of CSS, how to style web pages, and enhance them with responsive design techniques. ",
        courseThumbnailUrl: "https://images.prismic.io/turing/652ebea8fbd9a45bcec8188d_What_Goes_Behind_Writing_a_Flawless_CSS_Code_37742e2bcf.webp?auto=format,compress",
        rating: {
            stars: 4.8,
            counts: 986,
        },
        instructor: {
            name: "Areeba Ma'am     ",
            imgUrl: "https://i.pinimg.com/736x/70/aa/28/70aa28f678193194b4a023e542ce4775.jpg",
        },
        courseDuration: {
            hours: 5,
            lectures: 38,
        },
        coursePrice: 1449,
        courseLevel: {
            begginer: false,
            intermediate: false,
            expert: false,
            allLevel: true,
        },
        courseTag: {
            bestSeller: false,
            newest: false,
            popular: true,
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
    },
];

// ---->>>>---->>>>---->>>>---->>>>---->>>>----->>>>>----->>>>>-----
//  current course ==> this will be displayed on list
// ----<<<<-----<<<<<------<<<<<-------<<<<<<------<<<<<------<<<<<<
const CurrentCourse = [...Courses];


// ---->>>>---->>>>---->>>>---->>>>---->>>>----->>>>>----->>>>>-----
//  Update Result Counts Functions ==> to update no of results.
// ----<<<<-----<<<<<------<<<<<-------<<<<<<------<<<<<------<<<<<<
function UpdateResultsCount(arr) {
    if (arr.length == 0) {
        document.getElementById("resultCounts").innerText = `${arr.length} Result`;
    } else if (arr.length == 1) {
        document.getElementById("resultCounts").innerText = `${arr.length} Result`;
    } else if (arr.length > 1) {
        document.getElementById("resultCounts").innerText = `${arr.length} Results`;
    }
};
UpdateResultsCount(CurrentCourse);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// get course tag function -->> check tag and return current tag
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function getCourseTag(tag) {
    // console.log(tag);
    if (tag.bestSeller == true) {
        return `<i class="fa-solid fa-star"></i> Best Seller`;
    } else if (tag.newest == true) {
        return `<i class="fa-solid fa-wand-magic-sparkles"></i> New`;
    } else if (tag.popular == true) {
        return `<i class="fa-solid fa-heart"></i> Popular`;
    }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// level function -->> check level and return current one
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function getCourseLevel(level) {
    // console.log(level);
    if (level.begginer == true) {
        return "Begginer";
    } else if (level.intermediate == true) {
        return "Intermediate";
    } else if (level.expert == true) {
        return "Expert";
    } else if (level.allLevel == true) {
        return "All Level"
    };
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// star function -->> take a number and return stars as per value
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function getStars(n) {
    // console.log(n);
    if (n == 1) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n > 1 && n < 2) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star-half-stroke"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n == 2) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n > 2 && n < 3) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star-half-stroke"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n == 3) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-regular fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n > 3 && n < 4) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star-half-stroke"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n == 4) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-regular fa-star"></i>
        `;
    } else if (n > 4 && n < 5) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star-half-stroke"></i> 
        `;
    } else if (n == 5) {
        return `
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        <i class="fa-solid fa-star"></i> 
        `;
    }
}

// ----->>>>>---->>>>>----->>>>>----->>>>>---->>>>>----->>>>>-----
//     Loop Through The Course Array of Object and Print It on DOM
// -----<<<<<-----<<<<<-----<<<<<-----<<<<<-----<<<<<-----<<<<<---

const courseListElm = document.getElementById("courseList");
CurrentCourse.forEach(function (course) {

    courseListElm.innerHTML += `
    <div class="course">
        <div class="course-thumbnail">
            <img src="${course.courseThumbnailUrl}" alt="course thumnail">
        </div>

        <div class="course-details">
            <div class="details-tag">
                <h2 class="course-title">${course.courseName}</h2>
                <p>${course.courseDescription}</p>
                <p class="rating small-text">${getStars(course.rating.stars)} ${course.rating.stars} ( ${course.rating.counts} ) </p>
                <div class="course-instructor">
                    <img src="${course.instructor.imgUrl}">
                    <span class="small-text">${course.instructor.name} <i class="fa-solid fa-circle-check"></i></span>
                    </div>
                
                <p class="course-duration small-text"><i class="fa-solid fa-clock"></i> ${course.courseDuration.hours} total hours</p>
                <p class="course-lectures small-text"> <i class="fa-solid fa-person-chalkboard"></i> ${course.courseDuration.lectures} lectures</p>
                <p class="course-level small-text"> <i class="fa-solid fa-trophy"></i> ${getCourseLevel(course.courseLevel)}</p>
                <p class="course-tag small-text"> ${getCourseTag(course.courseTag)}</p>
            </div>
           
            <div class="price-tag">
                <p class="course-price"><i class="fa-solid fa-indian-rupee-sign"></i> ${course.coursePrice}</p>

                <button class="enroll-btn">Enroll Now</button>
            </div>
        </div>
    </div>
    `;

});

