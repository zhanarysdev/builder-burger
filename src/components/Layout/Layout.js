import React from 'react'
import Aux from '../../hoc/WrapperAux'

const layout = (props) => (
    <Aux>
      <div> one two three </div>
      <main>
        {props.children}
      </main>  
    </Aux>
)
export default layout;