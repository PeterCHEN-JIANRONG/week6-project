<template>
  <div class="container">
    <h1>產品頁</h1>
    <!-- {{ product }} -->
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid mb-4" :src="product.imageUrl" alt="" />
        <img class="img-fluid mb-1" v-for="item in product.imagesUrl" :src="item" :key="item" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5" v-if="!product.price">{{ toThousand(product.origin_price) }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ toThousand(product.origin_price) }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ toThousand(product.price) }} 元</div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" v-model.number="qty" min="1" />
            <button type="button" class="btn btn-primary" @click="addCart">
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- col-sm-6 end -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        origin_price: 0,
        price: 0,
      },
      qty: 1,
    };
  },
  methods: {
    getProduct(id) {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            this.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.message,
            });
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addCart() {
      const data = {
        product_id: this.product.id,
        qty: this.qty,
      };
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          if (res.data.success) {
            // this.loadingStatus.loadingItem = '';
            // this.qty = 1;
            this.$swal.fire({
              position: 'top',
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push('/products');
          } else {
            this.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.message,
            });
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    toThousand(num) {
      // 千分位
      const temp = num.toString().split('.');
      temp[0] = temp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return temp.join('.');
    },
  },
  created() {
    const { id } = this.$route.params;
    this.getProduct(id);
  },
};
</script>
