import { useState } from 'react'
import { InputText } from '@components/InputText'
import * as yup from "yup"
import { Formik, Form as FormikForm, Field, FieldInputProps, FormikProps, FormikHelpers } from "formik"
import styles from "@styles/Form.module.css"
import Button from './Button'
import PlasmicIcon__9BranchesStar from "@components/plasmic/achyle_2/icons/PlasmicIcon___9BranchesStar"
import PlasmicIcon__DoubleCircles from "@components/plasmic/achyle_2/icons/PlasmicIcon__DoubleCircles"
export interface FormData {
  name: string
  firstName: string
  email: string
  phone: string
  location: string
  job: string
  employees: string
}

const validationSchema = yup.object({
  name: yup.string().required('Ce champ est requis'),
  firstName: yup.string().required('Ce champ est requis'),
  email: yup.string().email('Veuillez entrer un email valide').required('Ce champ est requis'),
  phone: yup.string().required('Ce champ est requis'),
  location: yup.string().required('Ce champ est requis'),
  job: yup.string().required('Ce champ est requis'),
  employees: yup.string().required('Ce champ est requis')
})

export function Form ({ className, paragraph, description }: { className: string, paragraph: JSX.Element, description: JSX.Element }) {
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const initialValues: FormData = {
    name: "",
    firstName: "",
    email: "",
    phone: "",
    location: "",
    job: "",
    employees: ""
  }

  const submit = (data: FormData, { setSubmitting, resetForm }: FormikHelpers<FormData>) => {
    try {
      setSubmitting(true)
      const headers = new Headers()
      headers.append("Content-Type", "application/json")

      const body = {
        "name": data.name,
        "firstName": data.firstName,
        "email": data.email,
        "phone": data.phone,
        "location": data.location,
        "job": data.job,
        "employees": data.employees
      }

      const options: RequestInit = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
      }

      fetch("https://enw4zw0d62i4xos.m.pipedream.net", options)
      setMessage("Votre demande de démonstration a bien été envoyée ! Merci pour l'intérêt que vous portez à notre application. ")
      resetForm()
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.Wrapper}>
      <PlasmicIcon__9BranchesStar className={styles.IconRight} />
      <PlasmicIcon__DoubleCircles className={styles.IconLeft} />
      <div className={className}>
        <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
          {({ values, isSubmitting }) => (
            <FormikForm>
              <div className={styles.Form}>
                <div className={styles.Row}>
                  <Field name="name">
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName="name"
                        type="text"
                        label="Nom"
                        isRequired={true}
                        isEmpty={values.name === ''}
                        isValid={!Boolean(form.errors.name) && !form.touched.name}
                        error={form.errors.name}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                  <Field name="firstName">
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName="firstName"
                        type="text"
                        label="Prénom"
                        isRequired={true}
                        isEmpty={values.firstName === ''}
                        isValid={!Boolean(form.errors.firstName) && !form.touched.firstName}
                        error={form.errors.firstName}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                </div>
                <Field name='email'>
                  {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                    <InputText
                      fieldName='email'
                      type='email'
                      label='Email professionnel'
                      isRequired={true}
                      isEmpty={values.email === ''}
                      isValid={!Boolean(form.errors.email) && !form.touched.email}
                      error={form.errors.email}
                      {...field}
                      className={styles.Input}
                    />
                  )}
                </Field>
                <div className={styles.Row}>
                  <Field name='phone'>
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName='phone'
                        type='text'
                        label='Numéro de téléphone'
                        isRequired={true}
                        isEmpty={values.phone === ''}
                        isValid={!Boolean(form.errors.phone) && !form.touched.phone}
                        error={form.errors.phone}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                  <Field name='job'>
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName='job'
                        type='text'
                        label='Quel est votre poste ?'
                        isRequired={true}
                        isEmpty={values.job === ''}
                        isValid={!Boolean(form.errors.job) && !form.touched.job}
                        error={form.errors.job}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                </div>
                <div className={styles.Row}>
                  <Field name='employees'>
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName='employees'
                        type='text'
                        label='Nombre d&apos;employé(s)'
                        isRequired={true}
                        isEmpty={values.employees === ''}
                        isValid={!Boolean(form.errors.employees) && !form.touched.employees}
                        error={form.errors.employees}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                  <Field name='location'>
                    {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<FormData> }) => (
                      <InputText
                        fieldName='location'
                        type='text'
                        label='Localisation de l&apos;entreprise'
                        isRequired={true}
                        isEmpty={values.location === ''}
                        isValid={!Boolean(form.errors.location) && !form.touched.location}
                        error={form.errors.location}
                        {...field}
                        className={styles.Input}
                      />
                    )}
                  </Field>
                </div>
                {paragraph}
                <Button type="submit" className={styles.Button}>
                  Demander une démo
                </Button>
                {error && <span className={styles.Error}>{error}</span>}
                {message && <span className={styles.Message}>{message}</span>}
                {description}
              </div>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  )
}