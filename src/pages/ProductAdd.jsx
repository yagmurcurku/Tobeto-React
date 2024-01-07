import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

  const initialValues = {plate:"", dailyPrice:100}

  const schema = Yup.object({
    plate: Yup.string().required("Ürün adı zorunlu !"),
    dailyPrice: Yup.number().required("Günlük fiyat zorunlu !")
  })

  return (
      <Formik initialValues={initialValues} validationSchema={schema} 
          onSubmit={(values) => {
            console.log(values)
          }}>
        <Form className='ui form'>
          <KodlamaIoTextInput name="plate" placeholder="Plaka"/>
          <KodlamaIoTextInput name="dailyPrice" placeholder="Günlük ücret"></KodlamaIoTextInput>
          {/* <FormField>
            <Field name="plate" placeholder="Plaka"></Field>
            <ErrorMessage name='plate' render={error =>
              <Label pointing basic color='red' content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          {/* <FormField>
            <Field name="dailyPrice" placeholder="Günlük ücret"></Field>
            <ErrorMessage name='dailyPrice' render={error =>
              <Label pointing basic color='red' content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          <Button color='green' type='submit'>Ekle</Button>
        </Form>
      </Formik>
  )
}
