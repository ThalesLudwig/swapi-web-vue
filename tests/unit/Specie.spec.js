import { shallowMount } from '@vue/test-utils'
import Specie from '@/components/species/Specie.vue'

describe('Specie.vue', () => {

	it('is a Vue instance', () => {
		const wrapper = shallowMount(Specie)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('has an ID', () => {
		const wrapper = shallowMount(Specie, {
			propsData: { id: '1' }
		})
		expect(wrapper.props('id')).toBe('1')
	})

})