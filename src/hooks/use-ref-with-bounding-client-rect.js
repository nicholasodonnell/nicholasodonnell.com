import { useEffect, useState } from 'react'

export default fn => {
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (ref) {
      fn(ref.getBoundingClientRect())
    }
  }, [ref])

  return setRef
}
