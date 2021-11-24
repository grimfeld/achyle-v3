import styles from "@styles/InputRange.module.css"
import { ChangeEvent, useEffect, useState } from 'react'

export function InputRange ({ className, value, step, min, max, handleChange }: { className?: string, value: string | number, step: number, min: number, max: number, handleChange (e: ChangeEvent<HTMLInputElement>): void }): JSX.Element {

  const [intervals, setIntervals] = useState<Array<number>>([])

  useEffect(() => {
    setIntervals([])
    const step = (max - min) / 10
    for (let i = 0; i <= 10; i++) {
      console.log(i * step)
      setIntervals(intervals => [...intervals, i * step])
    }
  }, [max, min])

  return (
    <div className={[className, styles.Wrapper].join(' ')}>
      <div className={styles.InputWrapper}>
        <input type="range" className={styles.InputWrapper} onChange={handleChange} value={value} step={step} min={min} max={max} />
        <div className={styles.LabelsWrapper}>
          {intervals.map(interval => (
            <span key={interval}>{interval}</span>
          ))}
        </div>
      </div>
      <div className={styles.CurrentValue}>
        {value}
      </div>
    </div>
  )
}
