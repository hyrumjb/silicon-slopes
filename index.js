"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //Name checker

    window.onload = function () {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            displayName(savedName);
        }
    }

    function displayName(name) {
        document.querySelectorAll("input").forEach(input => {
            input.classList.toggle("hidden");
        });

        const hello = document.createElement("div");
        hello.style.fontSize = "34px";
        hello.textContent = "Hello " + name + "!"
        document.getElementById("name-form").appendChild(hello);
    }

    const submit = document.getElementById("submit");

    submit.addEventListener("click", () => {
        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();

        if (name) {
            localStorage.setItem('userName', name);
            displayName(name);
        } else {
            alert("Try inputting name again ...");
        }
    });

    // Sidebar navigation

    const nav = document.getElementById("my-nav");
    const openNav = document.getElementById("open-nav");
    const closeNav = document.getElementById("close-nav");
    
    function toggleNav() {
        nav.classList.toggle("open");
    }

    openNav.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);

    document.querySelectorAll(".selection").forEach(option => {
        option.addEventListener("click", toggleNav);
    })

    // Additional controls

    const removeImages = document.getElementById("remove-images");

    removeImages.addEventListener("click", () => {
        const images = document.querySelectorAll("img");
        const hiding = removeImages.textContent === "Remove Images";

        images.forEach(image => {
            image.classList.toggle("hidden", hiding);
        });

        removeImages.textContent = hiding ? "Add Images" : "Remove Images";
    });

    function switchColors(color) {
        document.body.classList.toggle(color);
        document.getElementById("footer-light").classList.add("highlight");
    }

    window.addEventListener("keydown", event => {
        if (event.key == "v") {
            switchColors("violet");
        } else if (event.key == "b") {
            switchColors("blue");
        }
    });

    document.getElementById("close-instructions").addEventListener("click", () => {
        document.getElementById("settings").classList.toggle("hidden");
    });
});