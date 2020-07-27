import { useEffect, useState } from 'react'

export default fn => {
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (ref) {
      fn(ref.getBoundingClientRect())
    }
  }, [ref?.getBoundingClientRect()?.height, ref?.getBoundingClientRect()?.width])

  return setRef
}
