import React, { useEffect, useState } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button,
} from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'


export default function ProductList() {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data))
  },[])

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
    toast.success(`${product.plate} sepete eklendi !`)
  }

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Plaka</TableHeaderCell>
            <TableHeaderCell>Günlük Fiyat</TableHeaderCell>
            <TableHeaderCell>Model Adı</TableHeaderCell>
            <TableHeaderCell>Model Yılı</TableHeaderCell>
            <TableHeaderCell>Marka Adı</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
           {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell><Link to={`/products/${product.id}`}>{product.plate}</Link></TableCell>
                <TableCell>{product.dailyPrice}</TableCell>
                <TableCell>{product.model.name}</TableCell>
                <TableCell>{product.model.year}</TableCell>
                <TableCell>{product.model.brand.name}</TableCell>
                <TableCell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></TableCell>
              </TableRow>
          ))}    
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <MenuItem as='a' icon>
                  <Icon name='chevron left' />
                </MenuItem>
                <MenuItem as='a'>1</MenuItem>
                <MenuItem as='a'>2</MenuItem>
                <MenuItem as='a'>3</MenuItem>
                <MenuItem as='a'>4</MenuItem>
                <MenuItem as='a' icon>
                  <Icon name='chevron right' />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
