<template>
  <BaseLayout>
    <header>
      <h1>Photo Library</h1>
      <p>You have {{ pagination.total }} photos</p>
      <p>
        Page
        <span class="pagination-page">
          {{ pagination.page }}
        </span>
        of
        <span class="pagination-total-pages">
          {{ pagination.totalPages }}
        </span>
      </p>
    </header>
    <div id="loading" v-if="loading">Loading...</div>
    <article v-else v-for="photo of photoList" :key="photo.id">
      <img :src="photo.url" />
    </article>
    <footer>
      <button
        :disabled="!hasBeforePage"
        :click="goToBeforePage"
        id="beforePageBtn"
      >
        Ant.
      </button>
      <button :disabled="!hasNextPage" :click="goToNextPage" id="nextPageBtn">
        Prox.
      </button>
    </footer>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../organisms/BaseLayout.vue";

export default {
  name: "PhotoLibrary",
  inject: ["photoService"],
  components: { BaseLayout },
  data() {
    return {
      loading: false,
      pagination: {
        page: 1,
        totalItems: 0,
        totalPages: 0,
      },
      pageSize: 10,
    };
  },
  mounted() {
    this.fetchPhotoList();
  },
  computed: {
    hasNextPage() {
      const { page, totalPages } = this.pagination;
      return page < totalPages;
    },
    hasBeforePage() {
      const { page } = this.pagination;
      return page > 0;
    },
  },
  methods: {
    async fetchPhotoList(page) {
      this.loading = true;
      const { pagination, data } = await this.photoService.getList(
        page,
        this.pageSize
      );
      this.pagination = { ...pagination, page };
      this.loading = false;
      return data;
    },
    async goToNextPage() {
      const newPage = this.pagination.page++;
      await this.changePage(newPage);
    },
    async goToBeforePage() {
      const newPage = this.pagination.page++;
      await this.changePage(newPage);
    },
    async changePage(page) {
      await this.fetchPhotoList(page);
    },
  },
};
</script>
