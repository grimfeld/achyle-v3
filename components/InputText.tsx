import { ChangeEvent, useState } from 'react'
import styles from "@styles/InputText.module.css"
import PlasmicIcon__Close from "@components/plasmic/achyle_2/icons/PlasmicIcon__Close"

export function InputText ({
  fieldName,
  isEmpty,
  isValid,
  isDisabled,
  isRequired,
  label,
  helper,
  error,
  className,
  placeholder,
  ...rest
}: {
  fieldName: string
  isEmpty?: boolean
  isValid?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  label?: string
  helper?: string
  error?: string
  className?: string
  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
  placeholder?: string
}): JSX.Element {

  const [focused, setFocused] = useState(false)

  return (
    <div className={[className, styles.Wrapper].join(' ')}>
      <div className={[styles.InputWrapper, focused ? styles.Focused : '', !isValid ? styles.Invalid : ''].join(' ')}>
        {label && <label className={[styles.Label, focused ? styles.Focused : '', !isEmpty ? styles.Focused : ''].join(' ')}>{label}{isRequired && <span style={{ color: "#66A699" }}> *</span>}</label>}
        <input id={fieldName} className={[styles.Input, focused ? styles.Focused : ''].join(' ')} placeholder={focused ? placeholder : ''} {...rest} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        {!isValid && <PlasmicIcon__Close className={styles.Icon} />}
      </div>
      {helper && isValid && <span className={styles.Helper}>{helper}</span>}
      {!isValid && error && <span className={styles.Error}>{error}</span>}
    </div>
  )
}