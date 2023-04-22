<template>
  <div v-if="showModal" class="tv-modal-container" @click.self="animateModal">
    <div class="tv-modal" ref="tvModal">
      <div
        class="tv-modal-image tv-m-auto"
        :class="`tv-modal-${configModal.icon}`"
        v-if="configModal.icon"
      ></div>
      <div class="tv-modal-title" v-if="configModal.title">
        {{ configModal.title }}
      </div>
      <hr
        class="tv-modal-separator"
        v-if="configModal.title && configModal.description"
      />
      <div class="tv-modal-description" v-if="configModal.description">
        {{ configModal.description }}
      </div>
      <div class="tv-modal-actions">
        <tv-button
          isSuccess
          isSmall
          @click="acceptModal"
          v-if="configModal.confirmButtonText"
        >
          {{ configModal.confirmButtonText }}
        </tv-button>
        <tv-button
          isSmall
          @click="cancelModal"
          v-if="configModal.cancelButtonText"
        >
          {{ configModal.cancelButtonText }}
        </tv-button>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
import useModal from "@/composables/useModal";

export default {
  name: "TvModal",
  components: {
    TvButton,
  },
  props: {
    configModal: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const {
      showModal,
      tvModal,
      animateModal,
      acceptModal,
      cancelModal,
      openModal,
    } = useModal();

    return {
      showModal,
      tvModal,
      animateModal,
      acceptModal,
      cancelModal,
      openModal,
    };
  },
  emits: ["acceptModal", "cancelModal"],
};
</script>

<style></style>
