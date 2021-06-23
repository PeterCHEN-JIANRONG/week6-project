<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin/products">導覽列</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/admin/products">產品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/admin/products">登出</router-link> -->
            <a href="#" class="nav-link" @click.prevent="signOut">登出</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">前台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-if="checkSuccess" />
</template>
<script>
// 登入驗證
export default {
  name: 'Dashboard',
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      // get token from cookie, set axios default headers
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        const url = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(url, { api_token: token }).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            this.checkSuccess = false;
            this.successAlert(res.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        this.successAlert('尚未登入');
        this.$router.push('/login');
      }
    },
    signOut() {
      document.cookie = 'hexToken=;expires=;';
      this.successAlert('token 已清除');
      this.$router.push('/login');
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
  },
  created() {
    this.checkLogin();
  },
};
</script>
