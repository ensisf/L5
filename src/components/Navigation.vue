<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">    
    <div class="container collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link to="/" tag="li" class="nav-item">
          <a class="nav-link">Домой</a>
        </router-link>
        <router-link to="/users" tag="li" class="nav-item">
          <a class="nav-link">Пользователи</a>
        </router-link>
        <router-link to="/add" tag="li" class="nav-item">
          <a class="nav-link">Добавить нового</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
