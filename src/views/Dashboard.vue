<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">導覽列</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/admin">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">前台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  後台
  <router-view />
</template>
