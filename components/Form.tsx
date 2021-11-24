import { ChangeEvent, useState } from 'react'
import { InputText } from '@components/InputText'
import * as yup from "yup"
import { Formik, Form as FormikForm, Field } from "formik"


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

export function Form ({ className }: { className: string }) {
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

  // const handleChange = (value: string, target: 'name' | 'firstName' | 'email' | 'phone' | 'location' | 'job' | 'employees') => {
  //   setData((data) => ({ ...data, [target]: value }))
  // }

  const submit = (data: FormData) => {
    try {

    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

  return (
    <div className={className}>
      <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
        {({ values, isSubmitting }) => (
          <FormikForm>
            <Field component={InputText} />
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