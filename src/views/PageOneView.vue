<template>
  <div class="">
    <div class="d-flex section">
      <div class="img-holder">
        <img
          src="https://colorlib.com/etc/bwiz/colorlib-wizard-1/images/form-wizard-1.jpg"
          alt=""
          class="img"
        />
      </div>
      <div class="form-content w-100">
        <div class="form-header">
          <h3>REGISTRATION</h3>
        </div>
        <p>Please fill with your details</p>
        <form action="" method="post">
          <div class="row form-row">
            <div class="col-md-6 col-sm-12 column">
              <input
                type="text"
                class="form-control input-control"
                placeholder="Full Name"
                style="color: #666"
                v-model="fullName"
              />
            </div> 

            <div class="col-md-6 column">
              <input type="text" class="form-control input-control" placeholder="Last Name" />
            </div>

            <div class="col-md-6 column">
              <input
                type="text"
                class="form-control input-control"
                placeholder="Your Email"
              />
            </div>

            <div class="col-md-6">
              <input
                type="text"
                class="form-control input-control"
                placeholder="Phone Number"
              />
            </div>

            <div class="col-md-6 column">
              <input type="text" class="form-control input-control" placeholder="Age" />
            </div>

            <div class="col-md-6 column">
              <div class="form-check form-check-inline mt-3 checkbox-inline ">
                <input
                  class="form-check-input checkbox-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option1"
                />
                <label class="form-check-label check-label" for="inlineCheckbox1"
                  >Male</label
                >
              </div>
              <div class="form-check form-check-inline checkbox-inline">
                <input
                  class="form-check-input checkbox-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="form-check-label check-label" for="inlineCheckbox2"
                  >Female</label
                >
              </div>
            </div>

            <div class="col-md-8">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label check-label" for="inlineRadio2"
                  >Nor again is there anyone who loves or pursues or desires to
                  obtaini. Backward</label
                >
              </div>
            </div>
          </div>

          <div class="button-area">
            <button class="btn-forward" type="submit" @click="validation()">
              Forward <i class="bi bi-arrow-right"> </i>
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
    return {
      fullName:'',
    }
  },
  methods: {
    validation(){
      if(this.fullName == ''){
        $('.form-control').attr('required', true)
      } else {
        this.$router.push('pagetwo')
      }
    }
  }

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

.col-md-6 {
  margin-bottom: 30px;
}

.form-content {
  padding-top: 65px;
  padding-left: 51px;
  padding-right: 51px;
}

.form-row {
  padding-top: 65px;
}

.form-header {
  text-align: center;
}

.input-control {
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
  border-radius: 0px;
  padding: 6px 0px;
}

input[type="text"] {
  color: #666;
}

.input-control:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
}

.input-control::placeholder {
  color: #666;
}

.checkbox-input[type="checkbox"] {
  border-radius: 50%;
  color: #e6e6e6;
}

.checkbox-inline {
  width: 150px;
}

.checkbox-input:focus {
  box-shadow: none;
  border-color: #999;
}
.checkbox-input:checked {
  background-color: #999;
  border-color: #999;
}

.check-label {
  color: #666;
}

.button-area {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 20px;
}

.btn-forward {
  float: right;
  width: 25%;
  height: 50px;
  padding: 0px 10px;
  align-items: center;
  outline: none;
  border: none;
  background: #e9e0cf;
  color: #666;
  margin-right: 30px;
}

.btn-forward:hover {
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

  .input-control {
    margin-top: 5px;
  }

  .column {
    margin-bottom: 20px;
  }
  .btn-forward {
    width: 50%;
    margin-left: 100px;
  }

  .button-area {
    width: 100%;
    display: flex;
    margin-top: 100px;
  }

  .checkbox-inline {
    width: 70px;
  }
}
</style>
