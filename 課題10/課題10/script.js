$("#btn").on("click", function () {
  $("#btn").animate({
    // 右に500px
      "left": "500px",
      // 下に300px
      "top" : "300px"
  }
  // 2秒かけて移動
  ,2000);
});
