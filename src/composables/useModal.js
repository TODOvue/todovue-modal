import { nextTick, ref, getCurrentInstance } from "vue";

const useModal = () => {
  const showModal = ref(false);
  const tvModal = ref();
  const instance = getCurrentInstance();

  const openModal = () => {
    showModal.value = true;
    nextTick(() => {
      _manageAnimation("tv-animation-scale-up", 100);
    });
  };

  const acceptModal = () => {
    _closeModal();
    instance.emit("acceptModal");
  };

  const cancelModal = () => {
    _closeModal();
    instance.emit("cancelModal");
  };

  const _closeModal = () => {
    _manageAnimation("tv-animation-scale-dw", 100);
    setTimeout(() => {
      showModal.value = false;
    }, 100);
  };

  const animateModal = () => {
    _manageAnimation("tv-animation-rotate", 500);
  };

  const _manageAnimation = (animation, duration) => {
    tvModal.value.classList.add(animation);
    setTimeout(() => {
      tvModal.value.classList.remove(animation);
    }, duration);
  };

  return {
    showModal,
    tvModal,
    acceptModal,
    animateModal,
    cancelModal,
    openModal,
  };
};

export default useModal;
