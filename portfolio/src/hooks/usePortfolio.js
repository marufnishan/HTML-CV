import { useEffect, useState } from 'react'
import { getPortfolio } from '../lib/api'

export function usePortfolio() {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let active = true
    getPortfolio()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: null, loading: false, error }))
    return () => {
      active = false
    }
  }, [])

  return state
}
