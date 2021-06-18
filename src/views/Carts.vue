<template>
  <div class="container">
    <h1>購物車</h1>
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
                <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem === item.id"></i>
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
</template>
<script>
export default {
  data() {
    return {
      cart: {
        total: 0,
        final_total: 0,
        carts: [],
      },
      hasCartsItems: false,
      loadingStatus: {
        loadingItem: '',
      },
    };
  },
  methods: {
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
    updateCart(item) {
      this.loadingStatus.loadingItem = item.id;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(url, { data })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.loadingStatus.loadingItem = '';
          }
          this.successAlert(res.data.message);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
          }
          this.successAlert(res.data.message);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_DOMAIN}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
          }
          this.successAlert(res.data.message);
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
  watch: {
    cart() {
      // 購物車是否有資料， length>0:true, length=0:false
      this.hasCartsItems = !!this.cart.carts.length;
    },
  },
  created() {
    this.getCart();
  },
};
</script>
