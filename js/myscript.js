// Genera 10 mail tramite api e stampale in una lista

var app= new Vue({
  el: "#app",
  data: {
    emailList: [],
    numb: 10
  },

  mounted: function (){
    for(i=0 ; i < this.numb; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then( risposta => {
        // console.log(risposta);
        this.emailList.push(risposta.data.response);
      });
    }

  }
})
