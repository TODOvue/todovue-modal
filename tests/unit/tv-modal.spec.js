import { shallowMount } from "@vue/test-utils";
import TvModal from "@/component/TvModal.vue";
describe("useModal", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvModal, {
      props: {
        configModal: {},
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
