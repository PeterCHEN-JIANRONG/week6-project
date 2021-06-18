<template>
  <div class="container">
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
                  @click="openProductModal(item)"
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
      <!-- 購物車列表 -->
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          :disabled="!hasCartsItems"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <!-- 判斷 購物車是否有資料 -->
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      class="form-control"
                      type="number"
                      min="1"
                      v-model.number="item.qty"
                      @blur="updateCart(item)"
                      :disabled="loadingStatus.loadingItem === item.id"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {{ item.product.unit }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                {{ toThousand(item.final_total) }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ toThousand(cart.total) }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ toThousand(cart.final_total) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

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
      cart: {
        total: 0,
        final_total: 0,
        carts: [],
      },
      loadingStatus: {
        loadingItem: '',
      },
      hasCartsItems: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
    };
  },
  components: {
    ProductModal,
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            this.errorAlert(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
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
      // this.loadingStatus.loadingItem = id;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            // this.loadingStatus.loadingItem = '';
            this.$refs.productModalA.qty = 1; // 初始化加入購物車數量:1
            this.$refs.productModalA.hideModal();
            this.successAlert(res.data.message);
          } else {
            this.errorAlert(res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.successAlert(res.data.message);
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
    this.getCart();
  },
};
</script>
