// AOS Animation

AOS.init({
    duration: 1200,
    once: true
});

// Typing Effect

const text = "Frontend Developer | Student";
let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);
    }
}

window.onload = function () {
    typeWriter();
};

// Contact Form Validation

function sendMessage() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields");

        return;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Enter a valid email address");

        return;
    }

    result.innerHTML =
        "✅ Thank You " +
        name +
        "! Your message has been sent successfully.";

    result.style.color = "#22c55e";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";
}

// Navbar Active Link Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

// Smooth Fade In on Scroll

const revealElements =
    document.querySelectorAll(
        ".glass-card,.skill-card,.project-card,.contact-card"
    );

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);

reveal();