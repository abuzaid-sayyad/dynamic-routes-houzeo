<template>
  <div>
    <div class="container">
      <h1>Categories</h1>
      <ul class="categories">
        <li class="category-name" v-for="category in categories" :key="category.slug">
          {{ category.name }}
          <ul class="subcategories">
            <li class="subcategory-name" v-for="subcategory in category.subcategories" :key="subcategory.slug" @click.stop="selectSubcategory(category, subcategory)">
              {{ subcategory.name }}
            </li>
          </ul>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          slug: 'homes-for-sell',
          name: 'Homes for Sell',
          subcategories: [
            { slug: 'california', name: 'California, US' },
            { slug: 'new-york', name: 'New York, US' },
            { slug: 'mexico', name: 'New Mexico, US' },
            { slug: 'miami', name: 'Miami, US' }
          ]
        },
        {
          slug: 'for-sell-by-owner',
          name: 'For sell by Owner Homes',
          subcategories: [
            { slug: 'birmingham', name: 'Birmingham, US' },
            { slug: 'chickasaw', name: 'Chickasaw' },
            { slug: 'phenix-city', name: 'Phenix City' },
            { slug: 'buena-park', name: 'Buena Park' }
          ]
        },
        {
          slug: 'homes-for-rent',
          name: 'Homes for Rent',
          subcategories: [
            { slug: 'california', name: 'California, US' },
            { slug: 'new-york', name: 'New York, US' },
            { slug: 'phenix-city', name: 'Phenix City' },
            { slug: 'buena-park', name: 'Buena Park' }
          ]
        },
      ]
    };
  },

  methods: {
    selectSubcategory(category, subcategory) {
      const categorySlug = category.slug;
      const subcategorySlug = subcategory.slug;
      this.$router.push(`/${categorySlug}/${subcategorySlug}`);
    }
  }
};
</script>
