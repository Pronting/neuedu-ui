<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'NeueduGit',
  data() {
    return {
      url: 'https://neuedu.com'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>