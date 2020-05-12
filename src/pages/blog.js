import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function NotFound() {
    return (
        <Layout page="about" bgColor="inherit">
           <BlogList />
        </Layout>
    )
}