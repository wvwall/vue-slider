var app = new Vue({
  el: "#root",
  data: {
    i: 0,
    srcImage: [
      "./assets/img/img1.jpg",
      "./assets/img/img2.jpg",
      "./assets/img/img3.jpg",
    ],
    play: " ",
    comments: [],
    comment: "",
  },
  methods: {
    next: function () {
      if (this.i < this.srcImage.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
    },
    prev: function () {
      if (this.i > 0) {
        this.i--;
      } else {
        this.i = this.srcImage.length - 1;
      }
    },
    dotSelect: function (i) {
      this.i = i;
    },
    autoslider: function () {
      this.play = setInterval(this.next, 2000);
    },
    stop: function () {
      clearInterval(this.play);
    },
    addComment: function (e) {
      this.comments.push(e.target.value);
      this.comment = "";
    },
  },
});
