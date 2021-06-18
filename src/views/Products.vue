<template>
  <div class="container">
    <h1>產品列表</h1>
    <div class="mt-4">
      <!-- 產品列表 -->
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div
                style="height: 100px; background-size: cover; background-position: center"
                v-if="item.imageUrl"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ toThousand(item.origin_price) }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ toThousand(item.price) }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="pushProductPage(item)"
                >
                  查看更多
                </button>
                <button type="button" class="btn btn-outline-danger" @click="addCart(item.id)">
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- vue-loading -->
  <VueLoading v-bind:active="isLoading"></VueLoading>

  <!-- modal -->
  <ProductModal ref="productModalA" :product="product" @add-to-cart="addCart"></ProductModal>
</template>
<script>
import ProductModal from '@/components/productModal.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
    };
  },
  components: {
    ProductModal,
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            this.errorAlert(res.data.message);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    pushProductPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    openProductModal(item) {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/product/${item.id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.$refs.productModalA.openModal();
          } else {
            this.errorAlert(res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          if (res.data.success) {
            // this.$refs.productModalA.hideModal();
            this.isLoading = false;
            this.successAlert(res.data.message);
          } else {
            this.errorAlert(res.data.message);
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
    successAlert(msg) {
      this.$swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    errorAlert(msg) {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
