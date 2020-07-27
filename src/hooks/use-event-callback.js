import { useCallback, useEffect, useRef } from 'react'

export default (fn, dependencies) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = fn
  }, [fn, ...dependencies])

  return useCallback((...params) => {
    const cb = ref.current

    return cb(...params)
  }, [ref])
}
