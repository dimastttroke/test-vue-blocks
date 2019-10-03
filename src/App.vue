<template>
  <div>
    <Navbar></Navbar>
    <BlocksList></BlocksList>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BlocksList from './components/BlocksList.vue';

export default {
  components: {
    Navbar,
    BlocksList
  }
}
</script>