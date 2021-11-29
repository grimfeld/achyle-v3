import { useState } from 'react'
import { InputText } from '@components/InputText'
import * as yup from "yup"
import { Formik, Form as FormikForm, Field, FieldInputProps, FormikProps } from "formik"
import styles from "@styles/Form.module.css"
import Button from './Button'
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

  const initialValues: FormData = {
    name: "",
    firstName: "",
    email: "",
    phone: "",
    location: "",
    job: "",
    employees: ""
  }

  const submit = (data: FormData) => {
    try {
      console.log(data)
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

  return (
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
              {description}
            </div>
          </FormikForm>
        )}
      </Formik>
      {/* <div>
        <InputText value={data.name} handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 'name')} />
        <InputText value={data.firstName} handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 'firstName')} />
      </div> */}
    </div>
  )
}