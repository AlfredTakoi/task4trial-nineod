<template>
  <div class="">
    <div class="d-flex section">
      <div class="img-holder">
        <img
          src="https://colorlib.com/etc/bwiz/colorlib-wizard-1/images/form-wizard-2.jpg"
          alt=""
          class="img"
        />
      </div>
      <div class="form-content w-100 d-flex flex-column">
        <div class="form-header">
          <h3>REGISTRATION</h3>
        </div>
        <div class="wizard-steps">
          <span class="dot active"></span>
          <span class="line active"></span>
          <span class="dot active"></span>
          <span class="line"></span>
          <span class="dot"></span>
        </div>
        <p>Please fill with additional info</p>
        <form action="" @submit.prevent="validation">
          <div class="row form-row">
            <div class="col-md-12 column">
              <input
                type="text"
                class="form-control input-control"
                placeholder="Address"
                style="color: #666"
                v-model="address"
              />
            </div>

            <div class="col-md-6 column">
              <input
                type="text"
                class="form-control input-control"
                placeholder="City"
              />
            </div>

            <div class="col-md-6 column">
              <input
                type="text"
                class="form-control input-control"
                placeholder="Zip Code"
              />
            </div>

            <div class="col-md-6 column">
              <select
                name="country"
                id="country"
                class="form-select input-select"
              >
                <option selected hidden>Your Country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Viet Nam">Viet Nam</option>
              </select>
            </div>
          </div>
          <div class="button-area">
            <button class="btn-backward" @click.prevent="$router.push('/')">
              <i class="bi bi-arrow-left"> </i> Backward
            </button>
            <button class="btn-forward" type="submit">
              Forward <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      address: "",
    };
  },
  methods: {
    validation() {
      if (this.address == "") {
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
.section {
  height: 100vh;
}

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

.wizard-steps .dot {
  width: 20px;
  margin: 0px 50px;
  height: 20px;
  border-radius: 50%;
  background-color: #e9e0cf;
  display: inline-block;
}

.wizard-steps .line {
  width: 80px;
  height: 2px;
  background: #e9e0cf;
  position: absolute;
  margin-top: 9px;
  margin-left: -40px;
}
.wizard-steps {
  text-align: center;
  margin: 10px 0px;
}

.wizard-steps .active {
  background: #6d7f52;
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

.column {
  margin-bottom: 20px;
}

.input-control:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
}

.input-control::placeholder {
  color: #666;
}

.input-select {
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
  border-radius: 0px;
  padding: 6px 0px;
  color: #666;
}

.input-select:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #e6e6e6;
}

.button-area {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 50px;
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
}

.btn-backward {
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

  .input-control {
    margin-top: 5px;
  }

  .wizard-steps {
    text-align: center;
    margin: 10px 0px;
  }

  .wizard-steps .dot {
    width: 15px;
    margin: 0px 30px;
    height: 15px;
  }
  .wizard-steps .line {
    width: 50px;
    height: 2px;
    background: #e9e0cf;
    margin-left: -25px;
  }
  .wizard-steps .active {
    background: #6d7f52;
  }

  .column {
    margin-bottom: 20px;
  }

  .button-area {
    width: 100%;
    display: flex;
    margin-top: 100px;
  }

  .btn-backward {
    width: 50%;
  }

  .btn-forward {
    width: 50%;
    margin-left: 0px;
  }
}
</style>
