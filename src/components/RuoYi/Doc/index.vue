<template>
  <div>
    <svg-icon icon-class="question" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'NeueduDoc',
  data() {
    return {
      url: 'http://neuedu.com'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>