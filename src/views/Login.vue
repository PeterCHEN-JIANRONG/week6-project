<template>
  <div class="container mt-5">
    <!-- 表單送出 -->
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="signIn">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="請輸入 Email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required"
            v-model="user.username"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <Field
            id="password"
            name="密碼"
            type="text"
            placeholder="請輸入密碼"
            class="form-control"
            :class="{ 'is-invalid': errors['密碼'] }"
            rules="required"
            v-model="user.password"
          ></Field>
          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="text-end mt-4">
          <button type="submit" class="btn btn-lg btn-primary btn-block">登入</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(url, this.user).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/admin/products');
        } else {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data.message,
          });
        }
      });
    },
  },
};
</script>
