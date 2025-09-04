// Extracted from src/modules/Menubar.astro
document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューのクリックイベント
  const navToggle = document.getElementById("nav_toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const navElement = document.querySelector(".nav");
      const containerElement = document.querySelector(".container");
      const navTagElement = document.querySelector("nav");

      if (navElement) {
        navElement.classList.toggle("open");
      } else {
        console.error("Nav要素が見つかりません");
      }

      if (containerElement) {
        containerElement.classList.toggle("add_container");
      } else {
        console.error("Container要素が見つかりません");
      }

      if (navTagElement) {
        navTagElement.classList.toggle("add_nav");
      } else {
        console.error("Navタグ要素が見つかりません");
      }
    });
  } else {
    console.error("NavToggle要素が見つかりません");
  }

  // ナビゲーションリンクのクリックイベント
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navElement = document.querySelector(".nav");
      const containerElement = document.querySelector(".container");
      const navTagElement = document.querySelector("nav");

      if (navElement) {
        navElement.classList.toggle("open");
      } else {
        console.error("Nav要素が見つかりません");
      }

      if (containerElement) {
        containerElement.classList.toggle("add_container");
      } else {
        console.error("Container要素が見つかりません");
      }

      if (navTagElement) {
        navTagElement.classList.toggle("add_nav");
      } else {
        console.error("Navタグ要素が見つかりません");
      }
    });
  });
});

