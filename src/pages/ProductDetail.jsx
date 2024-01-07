import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
  
  let {id} = useParams();


  const [product, setProduct] = useState({})

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProductById(id).then(result=>setProduct(result.data))
  },[])


  return (
    <div>
      <Card fluid size="large">
        <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/steve.jpg'
          />
          <CardContent>
            <CardHeader>{product.plate}</CardHeader>
            <CardMeta>Günlük ücret: {product.dailyPrice} ₺</CardMeta>
            <CardDescription>
              Daniel is a comedian living in Nashville.
            </CardDescription>
          </CardContent>
          <CardContent extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
