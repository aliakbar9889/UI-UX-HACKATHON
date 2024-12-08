import React from 'react'
import PageLayout from '@/components/Hero'
import ImageGallery from '@/components/Brand'
import Products from '@/components/Products'
import Category from '@/components/Category'
import Page from '@/components/Product'

const page = () => {
  return (
    <div>
      <PageLayout/>
      <ImageGallery/>
      <Products/>
      <Category/>
      <Page/>
    </div>
  )
}

export default page
