<script>
    import LoginForm from "$lib/auth/components/LoginForm.svelte";
</script>

<body class="auth-page">
<section class="part1"></section>
<section class="part2">
    <LoginForm />
</section>
</body>

<style lang="scss">
  @import "src/styles/vars";
    .part1 {
      width: 70vw;
      height: 100%;
      background-color: $background-light;
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: 75% 50%;
      background-image: url('auth.svg');
    }
    .part2 {
      width: 50vw;
      height: 100%;
      box-shadow: inset 8px 0px 1px -4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .auth-page {
      display: flex;
      height: 100vh;
      width: 100vw;
    }
</style>