import { Story, Meta } from '@storybook/react'
import Modal, { ModalProps } from './Modal'
import ModalFooter from './ModalFooter'
import Typography from '../Typography'
import Button from '../Button'
import { useState } from 'react'

export default {
  title: 'components/common/Modal',
  component: Modal
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [show, setShow] = useState(true)
  return (
    <div className="p-12 flex text-secondary">
      <Modal {...args} show={show} setShow={(s) => setShow(s)} />
    </div>
  )
}

const defaultArgs = {
  show: true,
  title: 'Sign in',
  padding: true,
  backdropClose: true,
  children: (
    <Typography size="small">
      Meet Peter, Founder and CEO of the Grow Group. Before founding Grow in
      2021, he established himself as a thought leader in the crypto space with
      a large following under his pseudonym ‘Bankless.’ The forward-thinking
      vision he shared through editorial pieces soon caught the attention of
      various cutting-edge blockchain companies, with whom Peter ended up taking
      on different advisory roles as a natural progression.
    </Typography>
  )
}

export const Large = Template.bind({})
Large.args = {
  ...defaultArgs,
  size: 'large'
}

export const Medium = Template.bind({})
Medium.args = {
  ...defaultArgs,
  size: 'medium'
}


export const Small = Template.bind({})
Small.args = {
  ...defaultArgs,
  size: 'small'
}

export const NoPadding = Template.bind({})
NoPadding.args = {
  ...defaultArgs,
  padding: false
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  ...defaultArgs,
  children: (
    <div>
      <Typography size="small">
        Meet Peter, Founder and CEO of the Grow Group. Before founding Grow in
        2021, he established himself as a thought leader in the crypto space
        with a large following under his pseudonym ‘Bankless.’ The
        forward-thinking vision he shared through editorial pieces soon caught
        the attention of various cutting-edge blockchain companies, with whom
        Peter ended up taking on different advisory roles as a natural
        progression.
      </Typography>
      <ModalFooter
        buttonPrimary={<Button variant="contained">Submit</Button>}
        buttonSecondary={<Button variant="text" color="secondary">Cancel</Button>}
      />
    </div>
  )
}
