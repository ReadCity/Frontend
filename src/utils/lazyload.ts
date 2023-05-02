import { lazy } from 'react'

export default function lazyload (path: string, namedExport: string) {
  return lazy(async () => {
    const promise = import(/* @vite-ignore */ path)
    if (namedExport == null) return await promise
    const module = await promise
    return ({ default: module[namedExport] })
  })
}
