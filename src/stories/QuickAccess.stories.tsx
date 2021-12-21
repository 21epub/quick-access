import type { ComponentMeta, ComponentStory } from '@storybook/react'
import 'antd/dist/antd.css'
import QuickAccess from '../components/QuickAccess'

export default {
  title: 'QuickAccess/Default',
  component: QuickAccess,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof QuickAccess>

const Template: ComponentStory<typeof QuickAccess> = (args) => {
  return <QuickAccess {...args} />
}

export const Default = Template.bind({})

Default.args = { type: 'cbt' }
