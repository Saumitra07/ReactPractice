//Combine stories

import React from 'react'
 import { Primary } from "../button/Button.stories";

 import { Large } from "../Input/Input.stories";

export default {
  title: 'form/Subscription',
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)