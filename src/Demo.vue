<template>
  <tv-demo :component="component" :variants="demos" @click="open" />
  <tv-modal
    :config-modal="modalConfig"
    @accept-modal="accept"
    @cancel-modal="cancel"
    ref="modal"
  />
</template>

<script>
import TvModal from "@/component/TvModal.vue";
import TvButton from "todovue-button";
import TvDemo from "todovue-demo";
import { ref, shallowRef } from "vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoModal",
  components: {
    TvModal,
    TvDemo,
  },
  setup() {
    const modal = ref();
    const modalConfig = ref({});
    const component = shallowRef(TvButton);
    const open = () => {
      modalConfig.value = {
        title: "Are you sure you want to delete it?",
        description:
          "If you delete it there is no step back, it will be permanently deleted",
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "No, keep it",
        icon: "warning",
      };
      modal.value.openModal();
    };

    const accept = () => {
      console.log("accept");
    };

    const cancel = () => {
      console.log("cancel");
    };

    return {
      open,
      modal,
      modalConfig,
      component,
      demos,
      accept,
      cancel,
    };
  },
};
</script>

<style></style>
