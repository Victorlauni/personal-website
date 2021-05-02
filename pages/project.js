import gql from 'graphql-tag'
import React from 'react'
import client from '../util/graphqlClient'
import Head from 'next/head'
import ProjectRecord from '../components/ProjectRecord';
import ProjectSection from '../components/ProjectSection';
export default function Project(props) {
  const {projects} = props;
  return (
    <div>
      <Head><title key="title">Victor Lau | Project</title></Head>
      <ProjectSection projects={projects}/>
    </div>
  )
}

export async function getStaticProps(){
  const res = await client.query({
    query: gql`
    query {
      projects {
      category
      description
      title
      url
      preview {
        url
      }
      }
    }
    `
  }).then(res => res.data)
  return {
    props: res
  }

}