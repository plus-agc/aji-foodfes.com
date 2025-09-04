// Extracted from src/pages/index.astro
// すべてのチェックボックスにイベントリスナーを追加
document.querySelectorAll(".toggleCheckbox").forEach(function (checkbox) {
  checkbox.addEventListener("change", function (event) {
    // すべてのターゲット要素を非表示にする
    document.querySelectorAll(".toggleCheckbox").forEach(function (cb) {
      const targetId = cb.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.style.display = "none";
      }
    });

    // data-target 属性で指定された要素のIDを取得
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    // クリックされたチェックボックスのターゲット要素を表示
    if (targetElement) {
      targetElement.style.display = "block";
    }

    // イベントのバブリングを停止
    event.stopPropagation();
  });
});

// 要素外をクリックしたときにすべてのターゲット要素を非表示にする
document.addEventListener("click", function () {
  document.querySelectorAll(".toggleCheckbox").forEach(function (cb) {
    const targetId = cb.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.style.display = "none";
    }
  });
});

