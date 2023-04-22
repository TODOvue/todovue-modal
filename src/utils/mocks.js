export const demos = [
  {
    id: 1,
    title: "TvModal Default",
    propsData: { buttonText: "Open modal" },
    html: `<script>
import { ref } from "vue";

setup() {
  const modal = ref();
  const modalConfig = ref({});
  
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
}

</script>
<tv-modal
  :config-modal="modalConfig"
  @accept-modal="accept"
  @cancel-modal="cancel"
  ref="modal"
/>`,
  },
];
