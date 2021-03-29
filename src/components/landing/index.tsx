import React from 'react'

import useHook from 'hooks/useHook'

const Landing = () => {
    return <h1 className="text-center">{useHook()}</h1>
}

export default Landing
