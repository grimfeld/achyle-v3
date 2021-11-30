import styles from "@styles/CTA.module.css"
import { EmailContext } from 'contexts/Email'
import { ChangeEvent, useContext } from 'react'

export function CallToAction ({ light, icon, button, className }: { light: Boolean, icon: JSX.Element, button: JSX.Element, className: string }): JSX.Element {

  const { email, changeEmail } = useContext(EmailContext)

  return (
    <div className={[styles.Wrapper, className, light ? styles.Light : ''].join(' ')}>
      {icon}
      <input type="text" placeholder="Renseignez votre email" className={styles.Input} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => changeEmail(e.currentTarget.value)} />
      {button}
    </div>
  )
}
