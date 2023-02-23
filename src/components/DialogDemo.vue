
<template>
  <div>
    <h5>Maximizable</h5>
    <prime-button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
    <prime-dialog
      header="Header"
      v-model:visible="displayMaximizable"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :maximizable="true"
      :modal="true"
    >
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <template #footer>
        <prime-button
          label="No"
          icon="pi pi-times"
          @click="closeMaximizable"
          class="p-button-text"
        />
        <prime-button
          label="Yes"
          icon="pi pi-check"
          @click="closeMaximizable"
          autofocus
        />
      </template>
    </prime-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMaximizable: false,
    };
  },
  methods: {
    openMaximizable() {
      this.displayMaximizable = true;
    },
    closeMaximizable() {
      this.displayMaximizable = false;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
