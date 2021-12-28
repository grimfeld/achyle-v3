import PlasmicIcon__9BranchesStar from "@components/plasmic/achyle_2/icons/PlasmicIcon___9BranchesStar"
import PlasmicIcon__DoubleCircles from "@components/plasmic/achyle_2/icons/PlasmicIcon__DoubleCircles"
import { InlineWidget } from 'react-calendly'
import styles from "@styles/Calendly.module.css"

export function Calendly ({ className }: { className: string }): JSX.Element {
  return (
    <div className={styles.Wrapper}>
      <PlasmicIcon__9BranchesStar className={styles.IconRight} />
      <PlasmicIcon__DoubleCircles className={styles.IconLeft} />
      <div className={className}>
        <InlineWidget url="https://calendly.com/anaelleguez" styles={{ height: "100%", minHeight: "487px" }} />
      </div>
    </div>
  )
}