import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Error from 'react-mua-error'
import 'react-mua-error/dist/index.css';

ReactDOM.render(<Error code={'403'} message={'hello'}/>, document.getElementById('root'))
