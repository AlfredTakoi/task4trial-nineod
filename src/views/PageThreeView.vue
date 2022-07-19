<template>
  <div class="">
    <div class="d-flex section">
      <div class="img-holder">
        <img
          src="https://colorlib.com/etc/bwiz/colorlib-wizard-1/images/form-wizard-3.jpg"
          alt=""
          class="img"
        />
      </div>
      <div class="form-content w-100 d-flex flex-column">
        <div class="form-header">
          <h3>REGISTRATION</h3>
        </div>
        <p>Send an optional message</p>
        <form action="">
          <div class="row">
            <div class="col-md-12">
              <textarea
                name="massage"
                id="massage"
                cols="5"
                rows="5"
                class="form-control"
                placeholder="Your Message Here!"
                v-model="message"
              ></textarea>
            </div>

            <div class="col-md-4 mt-4">
              <div class="form-check form-check-inline w-100">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Please accept
                  <a href="" class="link-terms"
                    >terms and conditions ?</a
                  ></label
                >
              </div>
            </div>
          </div>
          <div class="button-area">
            <button class="btn-backward" @click="$router.push('/pagetwo')">
              <i class="bi bi-arrow-left"> </i> Backward
            </button>
            <button class="btn-forward" type="submit" @click.prevent="validation()">
              Submit <i class="bi bi-check"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return{
      message: ''
    }
  },
  methods: {
    validation() {
      if (this.message == "") {
        $(".form-control").attr("required", true);
      } else {
        this.$router.push("/pagethree");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  height: 636px;
  object-fit: contain;
}

h3,
p {
  text-align: center;
}

p {
  font-size: 20px;
  color: #6d7f52;
}

h3 {
  border: 1px solid;
  align-items: center;
  font-size: 22px;
  color: #453e79;
  text-transform: uppercase;
  letter-spacing: 7px;
  padding: 5px 15px;
  position: relative;
  display: inline-block;
  border: 1px solid #dad8e4;
  margin-bottom: 25px;
}

.form-content {
  padding-top: 65px;
  padding-left: 51px;
  padding-right: 51px;
}

.row {
  padding-top: 65px;
  padding-bottom: 30px;
}

.form-header {
  text-align: center;
}

.form-control {
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
  border-radius: 0px;
  padding: 6px 0px;
  color: #666;
}

.form-control:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
}

.form-control::placeholder {
  color: #666;
}

.form-check-input[type="checkbox"] {
  border-radius: 50%;
  color: #e6e6e6;
}

.form-check-input:focus {
  box-shadow: none;
  border-color: #999;
}
.form-check-input:checked {
  background-color: #999;
  border-color: #999;
}

.form-check-label {
  color: #666;
}

.link-terms {
  text-decoration: none;
  color: #6d7f52;
}

.button-area {
  width: 100%;
  display: flex;
  justify-content: end;
}

.btn-forward {
  float: right;
  width: 25%;
  height: 50px;
  padding: 0px 10px;
  align-items: center;
  outline: none;
  border: none;
  background: #6d7f52;
  color: #e9e0cf;
  margin-left: 30px;
}

.btn-backward {
  float: right;
  height: 50px;
  width: 25%;
  padding: 0px 10px;
  align-items: center;
  outline: none;
  border: none;
  background: #e9e0cf;
  color: #666;
}

.btn-forward:hover {
  background-color: #7c8f60;
}

.btn-backward:hover {
  background-color: #cac8c3;
}
@media (max-width: 768px) {
  .section {
    flex-direction: column;
  }

  .img {
    height: 455px;
    object-fit: contain;
  }

  .form-content {
    padding-top: 65px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .row {
    margin-bottom: 100px;
  }

  .form-content-input {
    padding-top: 65px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .form-control {
    margin-top: 5px;
  }

  .col-md-6 {
    margin-bottom: 20px;
  }

  .col-md-12 {
    margin-bottom: 20px;
  }

  .button-area {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .btn-backward {
    width: 50%;
  }

  .btn-forward {
    width: 50%;
  }

  .form-check-inline {
    width: 70px;
  }
}
</style>
