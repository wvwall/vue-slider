
var app = new Vue ({
    el: "#root",
    data: {
      i: 0,
      srcImage: [
          "./assets/img/img1.jpg",
          "./assets/img/img2.jpg",
          "./assets/img/img3.jpg"
      ],
      comment: ""  
    },
    methods: {
        next: function (){
            if(this.i < this.srcImage.length - 1) {
                this.i++;
            } else {
                this.i = 0;
            }
        },
        prev: function (){
            if(this.i > 0) {
                this.i--;
            } else {
                this.i = this.srcImage.length - 1; 
            }
        },
        dotSelect: function(i){
            this.i=i;
        }
    }
    
});