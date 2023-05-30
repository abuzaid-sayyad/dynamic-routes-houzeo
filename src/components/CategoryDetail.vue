<template>
  <div>
    <div class="container">
      <h2>Category Detail</h2>
      <p>You are in the category <strong>{{ category }}</strong>.</p>
      <p v-if="subcategory">The subcategory is <strong>{{ subcategory }}</strong>.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: null,
      subcategory: null
    };
  },
  mounted() {
    this.loadCategory();
    this.loadSubcategory();
  },
  methods: {
    loadCategory() {
      const categorySlug = this.$route.params.categorySlug;
      this.category = categorySlug;
    },
    loadSubcategory() {
      const subcategorySlug = this.$route.params.subcategorySlug;
      this.subcategory = subcategorySlug;
    }
  }
};
</script>
