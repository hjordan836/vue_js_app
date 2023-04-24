const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: '',
      lastName: '',
    };
  },
  watch: {
    counter(value){
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //   this.fullName = value + ' ' + 'Jordan';
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } 
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
});

app.mount('#events');
