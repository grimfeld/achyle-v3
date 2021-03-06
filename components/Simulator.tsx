import * as React from 'react'
import { InputRange } from "@components/InputRange"
import Divider from "@components/Divider"
import styles from "@styles/Simulator.module.css"
import PlasmicIcon___8BranchesStar from "@components/plasmic/achyle_2/icons/PlasmicIcon___8BranchesStar"
import PlasmicIcon__ListStyleWhite from "@components/plasmic/achyle_2/icons/PlasmicIcon__ListStyleWhite"


export function Simulator ({ className, slot1, slot2, slot3, icon1, icon2 }: { className: string, slot1: JSX.Element, slot2: JSX.Element, slot3: JSX.Element, icon1: JSX.Element, icon2: JSX.Element }) {
  const [docsPerMonth, setDocsPerMonth] = React.useState(30)
  const [hoursPerDoc, setHoursPerDoc] = React.useState(5)

  const [hoursPerMonth, setHoursPerMonth] = React.useState(0)
  const [hoursPerYear, setHoursPerYear] = React.useState(0)


  const handleDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocsPerMonth(e.target.valueAsNumber)
  }
  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoursPerDoc(e.target.valueAsNumber)
  }

  React.useEffect(() => {
    setHoursPerMonth(Math.round(docsPerMonth * hoursPerDoc - (docsPerMonth * hoursPerDoc / 3)))
    setHoursPerYear(Math.round(hoursPerMonth * 12))
  }, [docsPerMonth, hoursPerDoc, hoursPerMonth])

  return (
    <div className={styles.Wrapper}>
      <PlasmicIcon___8BranchesStar className={styles.IconRight} />
      <PlasmicIcon__ListStyleWhite className={styles.IconLeft} />
      <div className={className}>
        <div className={styles.Row}>
          {slot1}
          <InputRange className={styles.Range} value={docsPerMonth} step={1} min={0} max={30} handleChange={handleDocsChange} />
        </div>
        <div className={styles.Row}>
          {slot2}
          <InputRange className={styles.Range} value={hoursPerDoc} step={1} min={0} max={10} handleChange={handleHoursChange} />
        </div>
        <Divider />
        <div>
          {slot3}
          <div className={styles.Row}>
            <div className={styles.Box}>
              {icon1}
              <div className={styles.BoxContent}>
                <h4>{hoursPerMonth}</h4>
                <p>Heures / mois</p>
              </div>
            </div>
            <div className={styles.Box}>
              {icon2}
              <div className={styles.BoxContent}>
                <h4>{hoursPerYear}</h4>
                <p>Heures / an soit {Math.ceil(hoursPerYear / 24)} jours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}