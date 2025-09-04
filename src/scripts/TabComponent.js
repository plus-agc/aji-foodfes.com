// Extracted from src/modules/TabComponent.astro
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // すべてのタブボタンからactiveクラスを削除
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // すべてのタブパネルを非表示
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // クリックされたタブボタンにactiveクラスを追加
      this.classList.add("active");

      // 対応するタブパネルを表示
      const targetPanel = document.getElementById(targetTab + "-panel");
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});

