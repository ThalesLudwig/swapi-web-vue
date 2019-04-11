import { shallowMount } from '@vue/test-utils'
import Planet from '@/components/planets/Planet.vue'

describe('Planet.vue', () => {

	it('is a Vue instance', () => {
		const wrapper = shallowMount(Planet)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('has an ID', () => {
		const wrapper = shallowMount(Planet, {
			propsData: { id: '1' }
		})
		expect(wrapper.props('id')).toBe('1')
	})

})