import React from 'react'
import ProductList from "../pages/ProductList"
import Categories from './Categories'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route path='/' Component={ProductList}/>
              <Route path='/products' Component={ProductList} />
              <Route path='/products/:id' Component={ProductDetail} />
              <Route path='/cart' Component={CartDetail} />
              <Route path='/product/add' Component={ProductAdd} />
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  )
}
