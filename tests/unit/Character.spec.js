import { shallowMount } from '@vue/test-utils'
import Character from '@/components/characters/Character.vue'

describe('Character.vue', () => {

	it('is a Vue instance', () => {
		const wrapper = shallowMount(Character)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	it('has an ID', () => {
		const wrapper = shallowMount(Character, {
			propsData: { id: '1' }
		})
		expect(wrapper.props('id')).toBe('1')
	})

})