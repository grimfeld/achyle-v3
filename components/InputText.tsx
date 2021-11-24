import { ChangeEvent } from 'react'

export function InputText ({ value, handleChange, className }: { className?: string, value: string, handleChange (e: ChangeEvent<HTMLInputElement>): void }) {
  return <input type="text" defaultValue={value} className={className} onChange={handleChange} />
}