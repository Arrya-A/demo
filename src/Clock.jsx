import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState("")
    const getTime = () => {
        const today = new Date()
        const h = today.getHours()
        const m = today.getMinutes()
        const s = today.getSeconds()
        setTime(`${h}:${m}:${s}`)
    }
    useEffect(() => {
        setTimeout(() => {
            getTime()
        }, 1000)
    }, [time])
    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <h1 style={{ fontSize: '80px', color: 'blue', fontWeight: 600 }}>{time}</h1>
        </div>
    )
}

export default Clock